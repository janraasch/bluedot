# Website 2025

Quick links:
- [Latest live version](https://website-25.k8s.bluedot.org/)
- [GitHub Project tasks](https://github.com/orgs/bluedotimpact/projects/2/)
- [Figma mocks](https://www.figma.com/proto/tDmNmBclyDSKa0WYUMSPEr/Bluedot?node-id=52-723&t=pCyhhcqvCCeUqPCn-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1)

## Developer setup

No special actions needed, just follow [the general developer setup instructions](../../README.md#developer-setup-instructions)

```
npm run start
```

```
npm run test
```

## Deployment

This app is deployed onto the K8s cluster as a standard Next.js app in docker.

To deploy a new version, simply commit to the master branch. GitHub Actions automatically handles CD.
