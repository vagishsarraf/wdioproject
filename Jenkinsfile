node {
    stage('Preparation') { // for display purposes
        // Get some code from a GitHub repository
        git 'https://github.com/vagishsarraf/wdioproject'
        // Get the Maven tool.
        // ** NOTE: This 'M3' Maven tool must be configured
        // **       in the global configuration.
    }
    stage('Install') {
        // Run the maven build
        sh 'npm install'
    }
    stage('Build') {
        // Run the maven build
        sh 'npm run $script --port=$port --logLevel=$logLevel'
    }
}
