import * as aws from '@pulumi/aws';

const server = new aws.ec2.Instance("myEC2Instance", {
    ami: "ami-04dfd853d88e818e8",
    instanceType: "t2.micro",
    tags: {
        Name: "myEC2Instance",
    },
});

export const publicIp = server.publicIp;
export const publicDns = server.publicDns;