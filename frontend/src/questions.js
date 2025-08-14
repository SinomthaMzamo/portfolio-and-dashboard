const questions = [
    { id: 1, question: "What is the main benefit of cloud computing?", options: ["Cost savings", "Better hardware", "On-premises servers", "Manual updates"], correct: "Cost savings" },
    { id: 2, question: "Which AWS service is used for object storage?", options: ["Amazon S3", "Amazon EC2", "Amazon RDS", "AWS Lambda"], correct: "Amazon S3" },
    { id: 3, question: "What does EC2 stand for?", options: ["Elastic Compute Cloud", "Elastic Container Cloud", "Enterprise Compute Cloud", "External Compute Cloud"], correct: "Elastic Compute Cloud" },
    { id: 4, question: "Which AWS service is a NoSQL database?", options: ["Amazon DynamoDB", "Amazon RDS", "Amazon Redshift", "Amazon Aurora"], correct: "Amazon DynamoDB" },
    { id: 5, question: "Which AWS service allows serverless compute?", options: ["AWS Lambda", "Amazon EC2", "Amazon S3", "Amazon RDS"], correct: "AWS Lambda" },
    { id: 6, question: "Which AWS service provides a relational database?", options: ["Amazon RDS", "Amazon S3", "Amazon EC2", "AWS Lambda"], correct: "Amazon RDS" },
    { id: 7, question: "What does VPC stand for in AWS?", options: ["Virtual Private Cloud", "Virtual Public Cloud", "Virtual Private Cluster", "Virtual Public Cluster"], correct: "Virtual Private Cloud" },
    { id: 8, question: "Which AWS service provides scalable DNS?", options: ["Amazon Route 53", "AWS CloudTrail", "Amazon CloudFront", "AWS Shield"], correct: "Amazon Route 53" },
    { id: 9, question: "What is the AWS shared responsibility model?", options: ["AWS manages security of the cloud; customers manage security in the cloud", "AWS manages everything", "Customers manage everything", "AWS manages customer data only"], correct: "AWS manages security of the cloud; customers manage security in the cloud" },
    { id: 10, question: "Which service is used to monitor AWS resources and applications?", options: ["Amazon CloudWatch", "AWS Config", "AWS CloudTrail", "AWS Trusted Advisor"], correct: "Amazon CloudWatch" },
    { id: 11, question: "Which AWS service can be used to migrate databases to AWS?", options: ["AWS Database Migration Service (DMS)", "AWS Glue", "Amazon Redshift", "Amazon Athena"], correct: "AWS Database Migration Service (DMS)" },
    { id: 12, question: "What is the benefit of using AWS Auto Scaling?", options: ["Automatically adjust capacity to maintain performance", "Reduce security risks", "Manage databases", "Store backups"], correct: "Automatically adjust capacity to maintain performance" },
    { id: 13, question: "What is Amazon CloudFront?", options: ["Content Delivery Network (CDN)", "Relational database service", "Serverless compute service", "Storage service"], correct: "Content Delivery Network (CDN)" },
    { id: 14, question: "What type of storage is Amazon EBS?", options: ["Block storage", "Object storage", "File storage", "Archive storage"], correct: "Block storage" },
    { id: 15, question: "Which AWS service is designed for big data analytics?", options: ["Amazon EMR", "Amazon RDS", "Amazon S3", "AWS Lambda"], correct: "Amazon EMR" },
    { id: 16, question: "What is AWS IAM used for?", options: ["Identity and Access Management", "Internet Access Management", "Infrastructure Access Management", "Instance Access Management"], correct: "Identity and Access Management" },
    { id: 17, question: "Which AWS service provides a data warehouse solution?", options: ["Amazon Redshift", "Amazon RDS", "Amazon DynamoDB", "Amazon Aurora"], correct: "Amazon Redshift" },
    { id: 18, question: "Which AWS service provides serverless event-driven compute?", options: ["AWS Lambda", "Amazon EC2", "Amazon S3", "Amazon RDS"], correct: "AWS Lambda" },
    { id: 19, question: "Which AWS service helps you detect and respond to security threats?", options: ["Amazon GuardDuty", "Amazon Inspector", "AWS Shield", "AWS WAF"], correct: "Amazon GuardDuty" },
    { id: 20, question: "What is AWS CloudTrail used for?", options: ["Log AWS API calls", "Store data", "Deliver content", "Compute resources"], correct: "Log AWS API calls" },
    { id: 21, question: "Which AWS service is used to host static websites?", options: ["Amazon S3", "Amazon EC2", "Amazon RDS", "AWS Lambda"], correct: "Amazon S3" },
    { id: 22, question: "Which pricing model charges you only for what you use?", options: ["Pay-as-you-go", "Reserved Instances", "Dedicated Hosts", "Spot Instances"], correct: "Pay-as-you-go" },
    { id: 23, question: "What is the purpose of AWS Trusted Advisor?", options: ["Provide best practice recommendations", "Monitor API calls", "Manage identities", "Store backups"], correct: "Provide best practice recommendations" },
    { id: 24, question: "Which AWS service provides serverless APIs?", options: ["Amazon API Gateway", "Amazon EC2", "AWS Lambda", "Amazon S3"], correct: "Amazon API Gateway" },
    { id: 25, question: "Which AWS service helps protect against DDoS attacks?", options: ["AWS Shield", "AWS WAF", "Amazon GuardDuty", "AWS Config"], correct: "AWS Shield" },
    { id: 26, question: "Which AWS database is a managed graph database?", options: ["Amazon Neptune", "Amazon RDS", "Amazon DynamoDB", "Amazon Redshift"], correct: "Amazon Neptune" },
    { id: 27, question: "What is the AWS Well-Architected Framework used for?", options: ["Help design reliable, secure, efficient systems", "Manage AWS accounts", "Monitor application performance", "Analyze big data"], correct: "Help design reliable, secure, efficient systems" },
    { id: 28, question: "What is an AWS Availability Zone?", options: ["Isolated data center in a region", "A physical region", "A virtual private cloud", "A storage volume"], correct: "Isolated data center in a region" },
    { id: 29, question: "Which AWS service is used to automate infrastructure as code?", options: ["AWS CloudFormation", "AWS OpsWorks", "Amazon EC2", "AWS Lambda"], correct: "AWS CloudFormation" },
    { id: 30, question: "Which AWS service provides machine learning capabilities?", options: ["Amazon SageMaker", "Amazon EMR", "AWS Lambda", "Amazon RDS"], correct: "Amazon SageMaker" },
    { id: 31, question: "Which AWS service is best suited for container orchestration?", options: ["Amazon ECS", "Amazon S3", "AWS Lambda", "Amazon RDS"], correct: "Amazon ECS" },
    { id: 32, question: "What is the purpose of AWS Organizations?", options: ["Manage multiple AWS accounts", "Host websites", "Store data", "Monitor AWS resources"], correct: "Manage multiple AWS accounts" },
    { id: 33, question: "Which service is used to encrypt data at rest in AWS?", options: ["AWS KMS", "AWS Shield", "AWS WAF", "Amazon CloudFront"], correct: "AWS KMS" },
    { id: 34, question: "Which AWS service offers virtual servers?", options: ["Amazon EC2", "Amazon S3", "Amazon RDS", "AWS Lambda"], correct: "Amazon EC2" },
    { id: 35, question: "Which AWS service provides scalable file storage?", options: ["Amazon EFS", "Amazon S3", "Amazon EBS", "Amazon Glacier"], correct: "Amazon EFS" },
    { id: 36, question: "What is the main benefit of multi-factor authentication (MFA)?", options: ["Adds extra layer of security", "Speeds up login", "Reduces costs", "Improves network speed"], correct: "Adds extra layer of security" },
    { id: 37, question: "Which AWS service enables building chatbots?", options: ["Amazon Lex", "Amazon Polly", "Amazon Rekognition", "AWS Lambda"], correct: "Amazon Lex" },
    { id: 38, question: "What does the AWS Free Tier provide?", options: ["Limited free usage of AWS services", "Unlimited free AWS services", "Free professional support", "Free dedicated servers"], correct: "Limited free usage of AWS services" },
    { id: 39, question: "Which AWS service is used to run containerized applications?", options: ["Amazon ECS", "Amazon S3", "AWS Lambda", "Amazon RDS"], correct: "Amazon ECS" },
    { id: 40, question: "Which AWS service helps in managing application secrets?", options: ["AWS Secrets Manager", "AWS IAM", "AWS CloudTrail", "AWS Shield"], correct: "AWS Secrets Manager" },
    { id: 41, question: "What is the main use of Amazon SQS?", options: ["Message queuing service", "Object storage", "Database", "Monitoring tool"], correct: "Message queuing service" },
    { id: 42, question: "Which AWS service helps automate software deployment?", options: ["AWS CodeDeploy", "AWS CodeCommit", "AWS CodeBuild", "AWS CodePipeline"], correct: "AWS CodeDeploy" },
    { id: 43, question: "Which AWS service helps in source code version control?", options: ["AWS CodeCommit", "AWS CodeDeploy", "AWS CodeBuild", "AWS CodePipeline"], correct: "AWS CodeCommit" },
    { id: 44, question: "Which AWS service automates software builds?", options: ["AWS CodeBuild", "AWS CodeDeploy", "AWS CodeCommit", "AWS CodePipeline"], correct: "AWS CodeBuild" },
    { id: 45, question: "What is AWS Lambda's billing based on?", options: ["Number of requests and compute time", "Number of virtual CPUs", "Data transfer", "Storage size"], correct: "Number of requests and compute time" },
    { id: 46, question: "Which AWS service can you use to inspect your AWS environment for compliance?", options: ["AWS Config", "AWS Shield", "Amazon GuardDuty", "Amazon CloudWatch"], correct: "AWS Config" },
    { id: 47, question: "Which AWS service helps prevent accidental deletion of data?", options: ["Amazon S3 Object Lock", "Amazon S3 Glacier", "AWS Backup", "AWS WAF"], correct: "Amazon S3 Object Lock" },
    { id: 48, question: "What is the maximum duration of an AWS Lambda execution?", options: ["15 minutes", "5 minutes", "1 hour", "30 seconds"], correct: "15 minutes" },
    { id: 49, question: "Which AWS service is designed to simplify data lake creation?", options: ["AWS Lake Formation", "Amazon Athena", "AWS Glue", "Amazon Redshift"], correct: "AWS Lake Formation" },
    { id: 50, question: "Which AWS service provides scalable in-memory caching?", options: ["Amazon ElastiCache", "Amazon RDS", "Amazon DynamoDB", "Amazon Redshift"], correct: "Amazon ElastiCache" },
    { id: 51, question: "Which AWS service is designed for data transformation and ETL?", options: ["AWS Glue", "Amazon Athena", "Amazon EMR", "Amazon Redshift"], correct: "AWS Glue" },
    { id: 52, question: "What does the term 'elasticity' mean in cloud computing?", options: ["Automatically scaling resources up or down", "Permanent allocation of resources", "Manual adjustment of resources", "Fixed capacity"], correct: "Automatically scaling resources up or down" },
    { id: 53, question: "Which AWS service provides a serverless relational database?", options: ["Amazon Aurora Serverless", "Amazon DynamoDB", "Amazon RDS on EC2", "Amazon Redshift"], correct: "Amazon Aurora Serverless" },
    { id: 54, question: "What AWS service allows you to centrally manage billing across multiple accounts?", options: ["AWS Organizations", "AWS IAM", "AWS Budgets", "AWS Billing Dashboard"], correct: "AWS Organizations" },
    { id: 55, question: "Which AWS service is best for running containerized Kubernetes clusters?", options: ["Amazon EKS", "Amazon ECS", "AWS Lambda", "AWS Batch"], correct: "Amazon EKS" },
    { id: 56, question: "Which AWS service is used to create a virtual network in the cloud?", options: ["Amazon VPC", "AWS CloudFormation", "AWS IAM", "Amazon Route 53"], correct: "Amazon VPC" },
    { id: 57, question: "What is the main purpose of Amazon Inspector?", options: ["Security assessment of applications", "Monitor billing", "Deploy applications", "Store backups"], correct: "Security assessment of applications" },
    { id: 58, question: "What does AWS CloudFormation allow you to do?", options: ["Automate infrastructure deployment", "Monitor AWS usage", "Manage user permissions", "Run serverless code"], correct: "Automate infrastructure deployment" },
    { id: 59, question: "Which AWS service is a data query service that lets you analyze data in S3 using SQL?", options: ["Amazon Athena", "Amazon Redshift", "AWS Glue", "Amazon EMR"], correct: "Amazon Athena" },
    { id: 60, question: "Which AWS service offers persistent block-level storage for EC2 instances?", options: ["Amazon EBS", "Amazon S3", "Amazon Glacier", "Amazon EFS"], correct: "Amazon EBS" },
    { id: 61, question: "Which AWS tool helps estimate costs and usage?", options: ["AWS Pricing Calculator", "AWS CloudTrail", "AWS Config", "AWS Shield"], correct: "AWS Pricing Calculator" },
    { id: 62, question: "Which AWS service is used for centralized logging of API calls?", options: ["AWS CloudTrail", "Amazon CloudWatch", "AWS Config", "AWS Lambda"], correct: "AWS CloudTrail" },
    { id: 63, question: "Which AWS service provides managed Redis and Memcached?", options: ["Amazon ElastiCache", "Amazon RDS", "Amazon DynamoDB", "Amazon S3"], correct: "Amazon ElastiCache" },
    { id: 64, question: "What is the AWS Well-Architected Framework’s pillar that focuses on protecting data and systems?", options: ["Security", "Performance Efficiency", "Reliability", "Cost Optimization"], correct: "Security" },
    { id: 65, question: "Which AWS service provides a global content delivery network?", options: ["Amazon CloudFront", "Amazon S3", "Amazon Route 53", "AWS Shield"], correct: "Amazon CloudFront" },
    { id: 66, question: "Which AWS service can be used to automatically distribute incoming application traffic?", options: ["Elastic Load Balancing", "Amazon Route 53", "AWS Lambda", "AWS Auto Scaling"], correct: "Elastic Load Balancing" },
    { id: 67, question: "What AWS service is used to archive data with long-term storage at low cost?", options: ["Amazon Glacier", "Amazon EBS", "Amazon S3", "Amazon RDS"], correct: "Amazon Glacier" },
    { id: 68, question: "Which AWS service allows you to create isolated networks within the AWS Cloud?", options: ["Amazon VPC", "Amazon EC2", "AWS Lambda", "Amazon S3"], correct: "Amazon VPC" },
    { id: 69, question: "Which AWS service helps detect unauthorized or malicious activity?", options: ["Amazon GuardDuty", "AWS Shield", "AWS WAF", "AWS Config"], correct: "Amazon GuardDuty" },
    { id: 70, question: "Which AWS pricing model offers the lowest cost for steady-state usage?", options: ["Reserved Instances", "On-Demand Instances", "Spot Instances", "Dedicated Hosts"], correct: "Reserved Instances" },
    { id: 71, question: "Which AWS service allows event-driven workflows by coordinating multiple AWS services?", options: ["AWS Step Functions", "AWS Lambda", "Amazon EventBridge", "Amazon SNS"], correct: "AWS Step Functions" },
    { id: 72, question: "What is the purpose of AWS Config?", options: ["Track resource configuration and compliance", "Store files", "Compute resources", "Monitor API calls"], correct: "Track resource configuration and compliance" },
    { id: 73, question: "Which AWS service provides real-time messaging for mobile and web applications?", options: ["Amazon SNS", "Amazon SQS", "AWS Lambda", "Amazon EC2"], correct: "Amazon SNS" },
    { id: 74, question: "What is the benefit of AWS Availability Zones?", options: ["High availability and fault tolerance", "Lower cost", "Faster compute", "Managed security"], correct: "High availability and fault tolerance" },
    { id: 75, question: "Which AWS service provides automatic scaling of EC2 instances?", options: ["AWS Auto Scaling", "Amazon CloudWatch", "AWS Lambda", "Amazon Route 53"], correct: "AWS Auto Scaling" },
    { id: 76, question: "Which AWS service is used to deploy and manage Docker containers?", options: ["Amazon ECS", "AWS Lambda", "Amazon EC2", "Amazon S3"], correct: "Amazon ECS" },
    { id: 77, question: "Which AWS service provides a fully managed message queuing service?", options: ["Amazon SQS", "Amazon SNS", "AWS Lambda", "Amazon Kinesis"], correct: "Amazon SQS" },
    { id: 78, question: "Which AWS service is used to analyze streaming data in real time?", options: ["Amazon Kinesis", "Amazon S3", "Amazon Redshift", "AWS Glue"], correct: "Amazon Kinesis" },
    { id: 79, question: "What AWS service is used to manage cryptographic keys?", options: ["AWS Key Management Service (KMS)", "AWS IAM", "AWS Shield", "Amazon GuardDuty"], correct: "AWS Key Management Service (KMS)" },
    { id: 80, question: "Which AWS service can you use to create user roles and permissions?", options: ["AWS IAM", "AWS Organizations", "AWS Shield", "Amazon GuardDuty"], correct: "AWS IAM" },
    { id: 81, question: "Which AWS service allows you to monitor and set alarms based on resource metrics?", options: ["Amazon CloudWatch", "AWS Config", "AWS CloudTrail", "AWS Trusted Advisor"], correct: "Amazon CloudWatch" },
    { id: 82, question: "What is the main purpose of Amazon Route 53?", options: ["DNS web service", "Object storage", "Virtual server", "Content delivery"], correct: "DNS web service" },
    { id: 83, question: "Which AWS service is designed for data warehousing?", options: ["Amazon Redshift", "Amazon RDS", "Amazon DynamoDB", "Amazon S3"], correct: "Amazon Redshift" },
    { id: 84, question: "Which AWS service provides a managed Elasticsearch?", options: ["Amazon OpenSearch Service", "Amazon CloudSearch", "Amazon Athena", "Amazon EMR"], correct: "Amazon OpenSearch Service" },
    { id: 85, question: "Which AWS service provides infrastructure as code?", options: ["AWS CloudFormation", "AWS IAM", "AWS Lambda", "AWS CodeDeploy"], correct: "AWS CloudFormation" },
    { id: 86, question: "What does AWS Lambda allow you to do?", options: ["Run code without provisioning servers", "Store files", "Manage databases", "Distribute content"], correct: "Run code without provisioning servers" },
    { id: 87, question: "Which AWS service offers fully managed Kubernetes?", options: ["Amazon EKS", "Amazon ECS", "AWS Lambda", "AWS Fargate"], correct: "Amazon EKS" },
    { id: 88, question: "What is AWS Shield?", options: ["Managed DDoS protection service", "IAM tool", "Monitoring service", "Content delivery network"], correct: "Managed DDoS protection service" },
    { id: 89, question: "Which AWS service is used for email sending?", options: ["Amazon SES", "Amazon SNS", "Amazon SQS", "AWS Lambda"], correct: "Amazon SES" },
    { id: 90, question: "Which AWS service is best for creating serverless APIs?", options: ["Amazon API Gateway", "AWS Lambda", "Amazon EC2", "Amazon S3"], correct: "Amazon API Gateway" },
    { id: 91, question: "Which AWS service can you use to automate software delivery pipelines?", options: ["AWS CodePipeline", "AWS CodeCommit", "AWS CodeDeploy", "AWS CodeBuild"], correct: "AWS CodePipeline" },
    { id: 92, question: "Which AWS service provides scalable object storage?", options: ["Amazon S3", "Amazon EBS", "Amazon EFS", "Amazon Glacier"], correct: "Amazon S3" },
    { id: 93, question: "Which AWS service provides in-memory data storage?", options: ["Amazon ElastiCache", "Amazon RDS", "Amazon DynamoDB", "Amazon S3"], correct: "Amazon ElastiCache" },
    { id: 94, question: "What is the use of AWS Budgets?", options: ["Track and manage AWS costs and usage", "Monitor API calls", "Deploy applications", "Store backups"], correct: "Track and manage AWS costs and usage" },
    { id: 95, question: "Which AWS service allows secure transfer of data over public networks?", options: ["AWS VPN", "AWS Direct Connect", "AWS IAM", "AWS CloudTrail"], correct: "AWS VPN" },
    { id: 96, question: "What does the AWS Cloud Adoption Framework (CAF) help organizations with?", options: ["Guide cloud adoption strategy", "Deploy applications", "Monitor costs", "Manage identities"], correct: "Guide cloud adoption strategy" },
    { id: 97, question: "Which AWS service provides a managed Kubernetes container orchestration?", options: ["Amazon EKS", "Amazon ECS", "AWS Lambda", "AWS Batch"], correct: "Amazon EKS" },
    { id: 98, question: "What AWS service offers managed SQL databases in the cloud?", options: ["Amazon RDS", "Amazon DynamoDB", "Amazon Redshift", "Amazon S3"], correct: "Amazon RDS" },
    { id: 99, question: "Which AWS service provides real-time event streaming and analytics?", options: ["Amazon Kinesis", "Amazon SQS", "Amazon SNS", "AWS Lambda"], correct: "Amazon Kinesis" },
    { id: 100, question: "What is the main benefit of AWS Auto Scaling?", options: ["Automatically adjusts capacity to maintain performance", "Monitors user activity", "Manages user permissions", "Creates backups"], correct: "Automatically adjusts capacity to maintain performance" },
    { id: 101, question: "Which AWS service can be used to monitor application and infrastructure logs?", options: ["Amazon CloudWatch", "AWS Config", "AWS CloudTrail", "AWS IAM"], correct: "Amazon CloudWatch" },
    { id: 102, question: "What AWS service helps secure AWS environments by continuously monitoring configuration changes?", options: ["AWS Config", "AWS Shield", "AWS WAF", "AWS IAM"], correct: "AWS Config" },
    { id: 103, question: "Which AWS service is primarily used for domain registration and DNS management?", options: ["Amazon Route 53", "AWS IAM", "Amazon CloudFront", "AWS WAF"], correct: "Amazon Route 53" },
    { id: 104, question: "What is AWS Trusted Advisor used for?", options: ["Provides best practice recommendations", "Manages encryption keys", "Delivers content globally", "Automates code deployments"], correct: "Provides best practice recommendations" },
    { id: 105, question: "Which AWS service is designed to detect and protect against DDoS attacks?", options: ["AWS Shield", "AWS WAF", "AWS GuardDuty", "AWS Firewall Manager"], correct: "AWS Shield" },
    { id: 106, question: "Which AWS service enables you to manage users and their permissions securely?", options: ["AWS IAM", "AWS Organizations", "AWS Config", "Amazon Cognito"], correct: "AWS IAM" },
    { id: 107, question: "What is the primary purpose of Amazon S3?", options: ["Object storage", "Virtual servers", "Content delivery", "Database management"], correct: "Object storage" },
    { id: 108, question: "Which AWS service is best suited for running event-driven code?", options: ["AWS Lambda", "Amazon EC2", "Amazon S3", "Amazon RDS"], correct: "AWS Lambda" },
    { id: 109, question: "What feature does Amazon CloudFront provide?", options: ["Content Delivery Network (CDN)", "Virtual Private Cloud (VPC)", "Database management", "Serverless compute"], correct: "Content Delivery Network (CDN)" },
    { id: 110, question: "Which AWS service allows you to run containers without managing servers or clusters?", options: ["AWS Fargate", "Amazon ECS", "Amazon EKS", "AWS Lambda"], correct: "AWS Fargate" },
    { id: 111, question: "Which AWS service is used for managing infrastructure as code?", options: ["AWS CloudFormation", "AWS IAM", "Amazon CloudWatch", "AWS CodeDeploy"], correct: "AWS CloudFormation" },
    { id: 112, question: "What does AWS Direct Connect provide?", options: ["Dedicated network connection to AWS", "Cloud storage", "Serverless computing", "Security monitoring"], correct: "Dedicated network connection to AWS" },
    { id: 113, question: "Which AWS service is a fully managed, petabyte-scale data warehouse?", options: ["Amazon Redshift", "Amazon RDS", "Amazon DynamoDB", "Amazon S3"], correct: "Amazon Redshift" },
    { id: 114, question: "Which AWS service lets you analyze data in S3 using standard SQL?", options: ["Amazon Athena", "Amazon EMR", "AWS Glue", "Amazon Redshift"], correct: "Amazon Athena" },
    { id: 115, question: "What is the purpose of AWS Glue?", options: ["ETL (extract, transform, load) service", "Object storage", "Serverless compute", "DNS management"], correct: "ETL (extract, transform, load) service" },
    { id: 116, question: "Which AWS service is designed for large-scale batch processing?", options: ["AWS Batch", "AWS Lambda", "Amazon EC2", "Amazon S3"], correct: "AWS Batch" },
    { id: 117, question: "What type of service is Amazon DynamoDB?", options: ["NoSQL database", "Relational database", "Object storage", "Content delivery"], correct: "NoSQL database" },
    { id: 118, question: "Which AWS service helps you analyze and visualize operational data in near real time?", options: ["Amazon CloudWatch", "AWS Config", "AWS Trusted Advisor", "Amazon SNS"], correct: "Amazon CloudWatch" },
    { id: 119, question: "What does Amazon Elastic Block Store (EBS) provide?", options: ["Persistent block storage for EC2", "Object storage", "In-memory caching", "Database services"], correct: "Persistent block storage for EC2" },
    { id: 120, question: "Which AWS service is designed to distribute incoming application traffic across multiple targets?", options: ["Elastic Load Balancer", "Amazon Route 53", "AWS Auto Scaling", "AWS Lambda"], correct: "Elastic Load Balancer" },
    { id: 121, question: "Which AWS service allows you to create and manage multiple AWS accounts centrally?", options: ["AWS Organizations", "AWS IAM", "AWS CloudFormation", "AWS Config"], correct: "AWS Organizations" },
    { id: 122, question: "Which AWS service can help protect web applications from common web exploits?", options: ["AWS WAF", "AWS Shield", "Amazon GuardDuty", "AWS IAM"], correct: "AWS WAF" },
    { id: 123, question: "What is the purpose of AWS CloudTrail?", options: ["Track user activity and API usage", "Store application data", "Monitor network traffic", "Manage encryption keys"], correct: "Track user activity and API usage" },
    { id: 124, question: "Which AWS service is used to send notifications?", options: ["Amazon SNS", "Amazon SQS", "AWS Lambda", "Amazon EC2"], correct: "Amazon SNS" },
    { id: 125, question: "What is the main function of Amazon Simple Queue Service (SQS)?", options: ["Message queuing service", "Email service", "Content delivery", "Serverless computing"], correct: "Message queuing service" },
    { id: 126, question: "Which AWS service enables real-time data processing for analytics?", options: ["Amazon Kinesis", "AWS Lambda", "Amazon S3", "Amazon RDS"], correct: "Amazon Kinesis" },
    { id: 127, question: "Which AWS service manages encryption keys?", options: ["AWS KMS", "AWS IAM", "AWS Shield", "AWS Config"], correct: "AWS KMS" },
    { id: 128, question: "Which AWS service helps you monitor compliance of AWS resource configurations?", options: ["AWS Config", "AWS CloudTrail", "Amazon CloudWatch", "AWS Trusted Advisor"], correct: "AWS Config" },
    { id: 129, question: "Which AWS service is used to create virtual servers in the cloud?", options: ["Amazon EC2", "Amazon S3", "AWS Lambda", "Amazon RDS"], correct: "Amazon EC2" },
    { id: 130, question: "What is the AWS Shared Responsibility Model?", options: ["Defines security responsibilities between AWS and customer", "Manages AWS billing", "Provides cost optimization tips", "Automates infrastructure deployment"], correct: "Defines security responsibilities between AWS and customer" },
    { id: 131, question: "Which AWS service offers a free tier with limited usage?", options: ["Many AWS services", "Only Amazon S3", "Only Amazon EC2", "Only AWS Lambda"], correct: "Many AWS services" },
    { id: 132, question: "Which AWS service helps migrate databases to AWS?", options: ["AWS Database Migration Service (DMS)", "AWS Glue", "Amazon Athena", "Amazon EMR"], correct: "AWS Database Migration Service (DMS)" },
    { id: 133, question: "Which AWS service provides a global network of edge locations for faster content delivery?", options: ["Amazon CloudFront", "Amazon S3", "AWS Shield", "AWS WAF"], correct: "Amazon CloudFront" },
    { id: 134, question: "What AWS service can help manage software development workflows?", options: ["AWS CodePipeline", "AWS Lambda", "Amazon S3", "Amazon EC2"], correct: "AWS CodePipeline" },
    { id: 135, question: "Which AWS service is used to store backups for long-term archival?", options: ["Amazon Glacier", "Amazon S3", "Amazon EBS", "Amazon RDS"], correct: "Amazon Glacier" },
    { id: 136, question: "Which AWS service provides managed VPN connections?", options: ["AWS VPN", "AWS Direct Connect", "Amazon VPC", "AWS IAM"], correct: "AWS VPN" },
    { id: 137, question: "Which AWS service is a centralized logging service for auditing AWS API calls?", options: ["AWS CloudTrail", "Amazon CloudWatch", "AWS Config", "AWS Trusted Advisor"], correct: "AWS CloudTrail" },
    { id: 138, question: "What AWS service offers a managed NoSQL database?", options: ["Amazon DynamoDB", "Amazon RDS", "Amazon Redshift", "Amazon Aurora"], correct: "Amazon DynamoDB" },
    { id: 139, question: "Which AWS service allows serverless backend for mobile and web apps?", options: ["AWS Amplify", "Amazon EC2", "Amazon S3", "AWS Lambda"], correct: "AWS Amplify" },
    { id: 140, question: "Which AWS service helps automate application deployment?", options: ["AWS CodeDeploy", "AWS CloudFormation", "Amazon EC2", "AWS Lambda"], correct: "AWS CodeDeploy" },
    { id: 141, question: "Which AWS service is used for identity federation and user authentication?", options: ["Amazon Cognito", "AWS IAM", "AWS KMS", "AWS Shield"], correct: "Amazon Cognito" },
    { id: 142, question: "What is the purpose of Amazon VPC?", options: ["Provision a logically isolated section of the AWS Cloud", "Store object data", "Manage user identities", "Deploy serverless applications"], correct: "Provision a logically isolated section of the AWS Cloud" },
    { id: 143, question: "Which AWS service allows you to run code without provisioning or managing servers?", options: ["AWS Lambda", "Amazon EC2", "Amazon ECS", "Amazon RDS"], correct: "AWS Lambda" },
    { id: 144, question: "What does the AWS Well-Architected Framework provide?", options: ["Best practices for designing reliable, secure, efficient, and cost-effective systems", "Pricing details", "Cloud migration guides", "User access management"], correct: "Best practices for designing reliable, secure, efficient, and cost-effective systems" },
    { id: 145, question: "Which AWS service provides scalable DNS services?", options: ["Amazon Route 53", "AWS CloudTrail", "Amazon S3", "AWS Lambda"], correct: "Amazon Route 53" },
    { id: 146, question: "What is Amazon Elastic File System (EFS) used for?", options: ["Managed file storage for EC2 instances", "Object storage", "Database storage", "Backup storage"], correct: "Managed file storage for EC2 instances" },
    { id: 147, question: "Which AWS service provides a global content delivery network?", options: ["Amazon CloudFront", "Amazon S3", "Amazon EC2", "Amazon RDS"], correct: "Amazon CloudFront" },
    { id: 148, question: "Which AWS service allows users to centrally manage billing and costs across multiple AWS accounts?", options: ["AWS Organizations", "AWS IAM", "AWS CloudFormation", "AWS Config"], correct: "AWS Organizations" },
    { id: 149, question: "What is the AWS Free Tier?", options: ["A limited, free access to AWS services for new users", "A paid premium service", "A discount program", "An enterprise-only offering"], correct: "A limited, free access to AWS services for new users" },
    { id: 150, question: "Which AWS service helps to create and manage APIs?", options: ["Amazon API Gateway", "AWS Lambda", "Amazon EC2", "Amazon RDS"], correct: "Amazon API Gateway" },
    { id: 151, question: "What is Amazon Aurora?", options: ["A MySQL and PostgreSQL-compatible relational database", "NoSQL database", "Object storage", "Serverless compute service"], correct: "A MySQL and PostgreSQL-compatible relational database" },
    { id: 152, question: "Which AWS service is best for scalable in-memory caching?", options: ["Amazon ElastiCache", "Amazon RDS", "Amazon DynamoDB", "Amazon S3"], correct: "Amazon ElastiCache" },
    { id: 153, question: "Which AWS service provides serverless orchestration of workflows?", options: ["AWS Step Functions", "AWS Lambda", "AWS CloudFormation", "Amazon EC2"], correct: "AWS Step Functions" },
    { id: 154, question: "What is the AWS Shared Responsibility Model?", options: ["It defines the security responsibilities of AWS and the customer", "It handles billing and cost management", "It provides technical support", "It governs access to AWS Marketplace"], correct: "It defines the security responsibilities of AWS and the customer" },
    { id: 155, question: "Which AWS service is used to automate resource provisioning using templates?", options: ["AWS CloudFormation", "AWS Config", "AWS Lambda", "Amazon EC2"], correct: "AWS CloudFormation" },
    { id: 156, question: "Which AWS service provides threat detection and continuous security monitoring?", options: ["Amazon GuardDuty", "AWS Shield", "AWS WAF", "AWS IAM"], correct: "Amazon GuardDuty" },
    { id: 157, question: "Which AWS service helps protect web applications from common web exploits?", options: ["AWS WAF", "AWS Shield", "Amazon GuardDuty", "AWS IAM"], correct: "AWS WAF" },
    { id: 158, question: "Which AWS service helps detect distributed denial-of-service (DDoS) attacks?", options: ["AWS Shield", "AWS WAF", "Amazon GuardDuty", "AWS IAM"], correct: "AWS Shield" },
    { id: 159, question: "What does Amazon S3 stand for?", options: ["Simple Storage Service", "Simple Server Service", "Secure Storage Service", "Standard Storage Service"], correct: "Simple Storage Service" },
    { id: 160, question: "Which AWS service offers a managed Kubernetes service?", options: ["Amazon EKS", "Amazon ECS", "AWS Lambda", "AWS Batch"], correct: "Amazon EKS" },
    { id: 161, question: "Which AWS service provides message queuing?", options: ["Amazon SQS", "Amazon SNS", "Amazon Kinesis", "AWS Lambda"], correct: "Amazon SQS" },
    { id: 162, question: "Which AWS service allows pub/sub messaging?", options: ["Amazon SNS", "Amazon SQS", "AWS Lambda", "Amazon EC2"], correct: "Amazon SNS" },
    { id: 163, question: "Which AWS service helps migrate databases to AWS with minimal downtime?", options: ["AWS Database Migration Service (DMS)", "AWS Glue", "Amazon Athena", "Amazon EMR"], correct: "AWS Database Migration Service (DMS)" },
    { id: 164, question: "Which AWS service provides managed ETL?", options: ["AWS Glue", "Amazon Athena", "AWS Lambda", "Amazon S3"], correct: "AWS Glue" },
    { id: 165, question: "What AWS service can run batch computing workloads?", options: ["AWS Batch", "AWS Lambda", "Amazon EC2", "Amazon S3"], correct: "AWS Batch" },
    { id: 166, question: "What AWS service provides an object storage solution with lifecycle management and high durability?", options: ["Amazon S3", "Amazon EBS", "Amazon Glacier", "Amazon EFS"], correct: "Amazon S3" },
    { id: 167, question: "Which AWS service provides cold storage for long-term archival?", options: ["Amazon Glacier", "Amazon S3", "Amazon EBS", "Amazon RDS"], correct: "Amazon Glacier" },
    { id: 168, question: "Which AWS service allows you to analyze data stored in S3 using SQL?", options: ["Amazon Athena", "Amazon EMR", "AWS Glue", "Amazon Redshift"], correct: "Amazon Athena" },
    { id: 169, question: "Which AWS service helps you manage and enforce compliance of AWS resource configurations?", options: ["AWS Config", "AWS CloudTrail", "Amazon CloudWatch", "AWS Trusted Advisor"], correct: "AWS Config" },
    { id: 170, question: "Which AWS service tracks user activity and API usage for auditing?", options: ["AWS CloudTrail", "Amazon CloudWatch", "AWS Config", "AWS Trusted Advisor"], correct: "AWS CloudTrail" },
    { id: 171, question: "Which AWS service provides scalable file storage for use with EC2 instances?", options: ["Amazon EFS", "Amazon S3", "Amazon EBS", "Amazon Glacier"], correct: "Amazon EFS" },
    { id: 172, question: "Which AWS service provides persistent block-level storage for EC2?", options: ["Amazon EBS", "Amazon S3", "Amazon EFS", "Amazon Glacier"], correct: "Amazon EBS" },
    { id: 173, question: "What AWS service provides real-time analytics for streaming data?", options: ["Amazon Kinesis", "Amazon SQS", "Amazon SNS", "AWS Lambda"], correct: "Amazon Kinesis" },
    { id: 174, question: "Which AWS service helps you automate code deployments?", options: ["AWS CodeDeploy", "AWS CloudFormation", "Amazon EC2", "AWS Lambda"], correct: "AWS CodeDeploy" },
    { id: 175, question: "Which AWS service is used for scalable relational databases?", options: ["Amazon RDS", "Amazon DynamoDB", "Amazon Redshift", "Amazon S3"], correct: "Amazon RDS" },
    { id: 176, question: "Which AWS service is a petabyte-scale data warehouse?", options: ["Amazon Redshift", "Amazon RDS", "Amazon DynamoDB", "Amazon Aurora"], correct: "Amazon Redshift" },
    { id: 177, question: "Which AWS service provides a serverless relational database compatible with MySQL and PostgreSQL?", options: ["Amazon Aurora Serverless", "Amazon DynamoDB", "Amazon Redshift", "Amazon S3"], correct: "Amazon Aurora Serverless" },
    { id: 178, question: "Which AWS service helps you centrally manage billing and access for multiple AWS accounts?", options: ["AWS Organizations", "AWS IAM", "AWS CloudFormation", "AWS Config"], correct: "AWS Organizations" },
    { id: 179, question: "Which AWS service provides a managed environment for deploying and scaling web applications and services?", options: ["AWS Elastic Beanstalk", "Amazon EC2", "AWS Lambda", "Amazon S3"], correct: "AWS Elastic Beanstalk" },
    { id: 180, question: "Which AWS service lets you deliver content with low latency via edge locations?", options: ["Amazon CloudFront", "Amazon S3", "Amazon EC2", "Amazon RDS"], correct: "Amazon CloudFront" },
    { id: 181, question: "What is the purpose of AWS IAM?", options: ["Manage user access and permissions", "Host applications", "Store data", "Run serverless functions"], correct: "Manage user access and permissions" },
    { id: 182, question: "Which AWS service is best suited for data archiving and long-term backup?", options: ["Amazon Glacier", "Amazon EBS", "Amazon RDS", "Amazon DynamoDB"], correct: "Amazon Glacier" },
    { id: 183, question: "What is the primary benefit of AWS CloudFormation?", options: ["Automate infrastructure provisioning", "Run containers", "Manage user identities", "Monitor resources"], correct: "Automate infrastructure provisioning" },
    { id: 184, question: "Which AWS service provides monitoring and operational insights?", options: ["Amazon CloudWatch", "AWS CloudTrail", "AWS Config", "AWS Trusted Advisor"], correct: "Amazon CloudWatch" },
    { id: 185, question: "Which AWS service helps you set up and manage a private network in the cloud?", options: ["Amazon VPC", "AWS IAM", "AWS Lambda", "Amazon S3"], correct: "Amazon VPC" },
    { id: 186, question: "What is the primary use case for Amazon Route 53?", options: ["Domain registration and DNS routing", "Content delivery", "Object storage", "Serverless computing"], correct: "Domain registration and DNS routing" },
    { id: 187, question: "Which AWS service helps protect applications from DDoS attacks?", options: ["AWS Shield", "AWS WAF", "Amazon GuardDuty", "AWS IAM"], correct: "AWS Shield" },
    { id: 188, question: "What is AWS Trusted Advisor?", options: ["A tool that provides real-time guidance to help provision resources following AWS best practices", "A security service", "A monitoring tool", "A deployment service"], correct: "A tool that provides real-time guidance to help provision resources following AWS best practices" },
    { id: 189, question: "Which AWS service allows you to run containerized applications using Docker?", options: ["Amazon ECS", "AWS Lambda", "Amazon RDS", "Amazon S3"], correct: "Amazon ECS" },
    { id: 190, question: "Which AWS service offers a fully managed Hadoop framework?", options: ["Amazon EMR", "Amazon Redshift", "AWS Glue", "Amazon Athena"], correct: "Amazon EMR" },
    { id: 191, question: "What is the AWS Well-Architected Framework’s five pillars?", options: ["Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization", "Security, Pricing, Performance, Scalability, Compliance", "Reliability, Support, Management, Efficiency, Governance", "Cost, Security, Scalability, Operations, Innovation"], correct: "Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization" },
    { id: 192, question: "Which AWS service is used for distributed messaging queues?", options: ["Amazon SQS", "Amazon SNS", "Amazon Kinesis", "AWS Lambda"], correct: "Amazon SQS" },
    { id: 193, question: "Which AWS service provides real-time event notifications?", options: ["Amazon SNS", "Amazon SQS", "Amazon Kinesis", "AWS Lambda"], correct: "Amazon SNS" },
    { id: 194, question: "What does AWS Lambda charge based on?", options: ["Number of requests and compute time", "Number of servers used", "Data storage size", "Number of users"], correct: "Number of requests and compute time" },
    { id: 195, question: "Which AWS service provides a managed MySQL-compatible database?", options: ["Amazon RDS", "Amazon DynamoDB", "Amazon Aurora", "Amazon Redshift"], correct: "Amazon RDS" },
    { id: 196, question: "What is the main use case for Amazon DynamoDB?", options: ["NoSQL database for single-digit millisecond latency", "Relational database", "Data warehouse", "File storage"], correct: "NoSQL database for single-digit millisecond latency" },
    { id: 197, question: "Which AWS service allows automated backups and snapshot creation for EC2 instances?", options: ["Amazon EBS snapshots", "AWS Lambda", "Amazon S3", "AWS CloudTrail"], correct: "Amazon EBS snapshots" },
    { id: 198, question: "What AWS service can you use to create isolated network environments?", options: ["Amazon VPC", "AWS IAM", "Amazon S3", "AWS CloudFormation"], correct: "Amazon VPC" },
    { id: 199, question: "Which AWS service is used for content delivery with low latency?", options: ["Amazon CloudFront", "Amazon S3", "Amazon EC2", "Amazon Route 53"], correct: "Amazon CloudFront" },
    { id: 200, question: "Which AWS service helps you analyze and visualize operational data?", options: ["Amazon CloudWatch", "AWS CloudTrail", "AWS Config", "AWS Trusted Advisor"], correct: "Amazon CloudWatch" },
    { id: 201, question: "Which AWS service provides a scalable block storage for EC2?", options: ["Amazon EBS", "Amazon S3", "Amazon EFS", "Amazon Glacier"], correct: "Amazon EBS" },
    { id: 202, question: "What is AWS CloudTrail primarily used for?", options: ["Logging and monitoring API calls", "Object storage", "Network management", "Load balancing"], correct: "Logging and monitoring API calls" },
    { id: 203, question: "Which AWS service helps automate infrastructure provisioning using JSON or YAML templates?", options: ["AWS CloudFormation", "AWS Config", "AWS Lambda", "AWS IAM"], correct: "AWS CloudFormation" },
    { id: 204, question: "What AWS service provides managed Apache Spark and Hadoop clusters?", options: ["Amazon EMR", "Amazon Redshift", "AWS Glue", "Amazon Athena"], correct: "Amazon EMR" },
    { id: 205, question: "Which AWS service helps migrate databases to AWS with minimal downtime?", options: ["AWS Database Migration Service", "AWS Glue", "Amazon Athena", "Amazon EMR"], correct: "AWS Database Migration Service" },
    { id: 206, question: "Which AWS service offers serverless compute with automatic scaling?", options: ["AWS Lambda", "Amazon EC2", "Amazon ECS", "Amazon EKS"], correct: "AWS Lambda" },
    { id: 207, question: "What AWS service can you use to create and manage cryptographic keys?", options: ["AWS KMS", "AWS IAM", "AWS Shield", "AWS WAF"], correct: "AWS KMS" },
    { id: 208, question: "Which AWS service allows for data warehousing and analytics?", options: ["Amazon Redshift", "Amazon RDS", "Amazon DynamoDB", "Amazon S3"], correct: "Amazon Redshift" },
    { id: 209, question: "Which AWS service helps monitor and improve AWS infrastructure security?", options: ["AWS Trusted Advisor", "AWS CloudWatch", "AWS Config", "AWS IAM"], correct: "AWS Trusted Advisor" },
    { id: 210, question: "Which AWS service is best for storing and retrieving any amount of data at any time?", options: ["Amazon S3", "Amazon EBS", "Amazon EFS", "Amazon Glacier"], correct: "Amazon S3" },
    { id: 211, question: "Which AWS service is used to run Docker containers?", options: ["Amazon ECS", "AWS Lambda", "Amazon EC2", "Amazon S3"], correct: "Amazon ECS" },
    { id: 212, question: "What is the function of Amazon Elastic Beanstalk?", options: ["Deploy and manage applications quickly", "Store data", "Manage users", "Monitor performance"], correct: "Deploy and manage applications quickly" },
    { id: 213, question: "Which AWS service offers a managed Kubernetes environment?", options: ["Amazon EKS", "Amazon ECS", "AWS Lambda", "AWS Batch"], correct: "Amazon EKS" },
    { id: 214, question: "Which AWS service allows real-time data processing of streaming data?", options: ["Amazon Kinesis", "Amazon SQS", "Amazon SNS", "AWS Lambda"], correct: "Amazon Kinesis" },
    { id: 215, question: "Which AWS service helps to detect malicious or unauthorized behavior?", options: ["Amazon GuardDuty", "AWS Shield", "AWS WAF", "AWS IAM"], correct: "Amazon GuardDuty" },
    { id: 216, question: "Which AWS service allows you to create isolated networks?", options: ["Amazon VPC", "AWS IAM", "Amazon S3", "AWS CloudFormation"], correct: "Amazon VPC" },
    { id: 217, question: "What is the primary benefit of using Amazon Aurora?", options: ["High performance and availability for relational databases", "Object storage", "NoSQL database", "Content delivery"], correct: "High performance and availability for relational databases" },
    { id: 218, question: "Which AWS service provides a scalable and fully managed NoSQL database?", options: ["Amazon DynamoDB", "Amazon RDS", "Amazon Redshift", "Amazon Aurora"], correct: "Amazon DynamoDB" },
    { id: 219, question: "What does AWS CloudWatch monitor?", options: ["Resource and application metrics", "User access", "Network traffic", "Billing"], correct: "Resource and application metrics" },
    { id: 220, question: "Which AWS service provides managed ETL capabilities?", options: ["AWS Glue", "Amazon Athena", "AWS Lambda", "Amazon Redshift"], correct: "AWS Glue" }     
  ];

// Utility: shuffle array in-place (Fisher-Yates)
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // Prepare questions: shuffle options, then shuffle questions, then slice 65
  questions.forEach(q => {
    shuffleArray(q.options);
  });

  const shuffledQuestions = shuffleArray([...questions]);
  const subset65 = shuffledQuestions.slice(0, 65);

  document.addEventListener("DOMContentLoaded", () => {
    const questionCard = document.getElementById("questionCard");
    const nextBtn = document.getElementById("nextBtn");
    const scoreDiv = document.getElementById("score");

    let currentIndex = 0;
    let correctCount = 0;
    let answeredQuestions = 0;

    function renderQuestion(index) {
      const q = subset65[index];

      // Create front card (question + options)
      const front = document.createElement("div");
      front.className = "card-front";
      front.innerHTML = `<h3>${index + 1}. ${q.question}</h3>`;

      q.options.forEach(option => {
        const label = document.createElement("label");
        label.innerHTML = `<input type="radio" name="answer" value="${option}"> ${option}`;
        front.appendChild(label);
      });

      // Create back card (feedback)
      const back = document.createElement("div");
      back.className = "card-back";

      // Clear old content, build new card-inner
      questionCard.innerHTML = "";
      const inner = document.createElement("div");
      inner.className = "card-inner";
      inner.appendChild(front);
      inner.appendChild(back);
      questionCard.appendChild(inner);

      // Reset states
      nextBtn.disabled = true;
      questionCard.classList.remove("flipped");

      // Listen for answer
      front.querySelectorAll("input[name='answer']").forEach(input => {
        input.addEventListener("change", () => {
          const selected = input.value;
          const isCorrect = selected === q.correct;

          // Show feedback on back
          back.textContent = isCorrect
            ? "Correct!"
            : `Incorrect! Correct answer: ${q.correct}`;

          back.classList.toggle("incorrect", !isCorrect);

          // Flip card to back side
          questionCard.classList.add("flipped");

          // Update score only if this question not previously answered
          if (!userAnswers[q.id]) {
            answeredQuestions++;
            if (isCorrect) correctCount++;
            userAnswers[q.id] = selected;
          }

          nextBtn.disabled = false;
          updateScore();
        });
      });
    }

    function updateScore() {
      const percent = answeredQuestions === 0 ? 0 : ((correctCount / subset65.length) * 100).toFixed(1);
      scoreDiv.textContent = `Score: ${percent}% (${correctCount} correct out of ${subset65.length} answered)`;
    }

    nextBtn.addEventListener("click", () => {
      if (currentIndex < subset65.length - 1) {
        currentIndex++;
        renderQuestion(currentIndex);
      } else {
        alert(`Quiz complete!\nFinal score: ${correctCount} out of ${subset65.length}`);
      }
      nextBtn.disabled = true;
    });

    const userAnswers = {}; // store user answers by question id

    // Start quiz
    renderQuestion(currentIndex);
  });