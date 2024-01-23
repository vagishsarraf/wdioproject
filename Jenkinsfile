node {
    stages{
        stage('Preparation') {
            git branch: 'main', credentialsId: 'c6eb9e50-7f1f-436d-8f09-6bcff81c1585', url: 'https://github.com/vagishsarraf/wdioproject'
            }
            stage('Install') {
                sh 'npm install'
                }
                stage('Build') {
                    sh 'npm run $script --port=$port --logLevel=$logLevel'
                    }
        }
                    post {
                        always {
                            allure includeProperties:false,
                            jdk: '',
                            results: [[path: 'allure-results']]
                            }
                        }
    }
