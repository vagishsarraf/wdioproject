node {
    stage('Preparation') { // for display purposes
        // Get some code from a GitHub repository
        git branch: 'main', credentialsId: 'c6eb9e50-7f1f-436d-8f09-6bcff81c1585', url: 'https://github.com/vagishsarraf/wdioproject'
    }
    stage('Install') {
        // Run the maven build
        sh 'npm install'
    }
    stage('Build') {
        // Run the maven build
        sh 'npm run $script --port=$port --logLevel=$logLevel'
    }
    stage('Report'){
        allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
    }
}
