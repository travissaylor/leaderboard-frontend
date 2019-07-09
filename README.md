# Prerequisites

* npm
* node

# Local Development

To start the app on your local machine do the following:

`npm init`

`npm install`

`npm run dev`

The app will run at `localhost:3000`

# Kubernetes Deployment

The helm chart for this app is the amg-leaderboard-chart directory. 

To deploy the chart to your cluster, do the following:

`helm install amg-leaderboard-chart -n <desired-namespace> --name <desired-release-name>`

make sure to replace <desired-namespace> and <desired-release-name> with appropriate names

The chart is currently set up to run as a NodePort service. To find the ip and port to find the application at, run the following command:

`kubectl get svc <desired-release-name>-amg-leaderboard-chart`

You will find the ip under EXTERNAL-IP and the port will be under PORT(S)