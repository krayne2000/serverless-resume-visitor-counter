# Serverless Resume Visitor Counter

A serverless resume visitor counter built with AWS Lambda, Amazon DynamoDB,
IAM, CloudWatch, and Lambda Function URLs.

## Project Overview

I built a serverless resume visitor counter with @NextWork.

- Created a public HTTPS endpoint with AWS Lambda Function URLs
- Stored persistent visitor counts with Amazon DynamoDB atomic updates
- Applied least-privilege IAM access for one DynamoDB action and table
- Verified requests through CloudWatch Logs and added a non-counting health route

## Architecture

Browser
   ↓
Lambda Function URL
   ↓
AWS Lambda
   ↓
Amazon DynamoDB

CloudWatch Logs
   ↓
Monitoring and verification

## AWS Services Used

- AWS Lambda
- Lambda Function URLs
- Amazon DynamoDB
- AWS IAM
- Amazon CloudWatch

## What I Learned

- Serverless architecture
- HTTP endpoints using Lambda Function URLs
- DynamoDB atomic updates
- IAM least-privilege permissions
- CloudWatch logging
- Basic AWS monitoring

## Project Status

Completed

## Screenshots

Screenshots of the AWS resources and working application are included
in the `screenshots` directory.
