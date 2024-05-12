provider "aws" {
  region = "us-east-1"
}

resource "aws_lambda_function" "analytics_lambda" {
  function_name = "AnalyticsLambdaFunction"
  handler       = "index.handler"
  runtime       = "nodejs14.x"
  role          = aws_iam_role.lambda_exec.arn

  s3_bucket = "analytics-lambda-deployment"
  s3_key    = "function.zip"
}

resource "aws_iam_role" "lambda_exec" {
  name = "lambda_execution_role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Action = "sts:AssumeRole",
        Effect = "Allow",
        Principal = {
          Service = "lambda.amazonaws.com"
        },
      },
    ],
  })
}

resource "aws_api_gateway_rest_api" "analytics_api" {
  name        = "AnalyticsAPI"
  description = "API Gateway for Analytics Lambda Function"
}

# Define an EC2 instance for the application server
resource "aws_instance" "app_server" {
  ami           = "ami-0c55b159cbfafe1f0" # Example AMI ID, this will need to be updated with a valid AMI
  instance_type = "t2.micro" # Example instance type, this should be updated based on actual requirements

  tags = {
    Name = "AppServerInstance"
  }
}

# Define additional resources as needed
