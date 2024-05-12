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

# Define a security group for the EC2 instance to manage network access
resource "aws_security_group" "app_server_sg" {
  name        = "app_server_sg"
  description = "Security group for AppServerInstance EC2 instance"

  # Example rules, these will need to be updated based on actual requirements
  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# Define an RDS instance for the database
resource "aws_db_instance" "app_db" {
  allocated_storage    = 20
  storage_type         = "gp2"
  engine               = "mysql"
  engine_version       = "5.7"
  instance_class       = "db.t2.micro"
  name                 = "appdb"
  username             = "admin"
  password             = "password" # This should be replaced with a secure password
  parameter_group_name = "default.mysql5.7"
  skip_final_snapshot  = true

  tags = {
    Name = "AppDBInstance"
  }
}

# Define additional resources as needed
