import { Injectable } from '@nestjs/common';
import { KubeConfig, CoreV1Api } from '@kubernetes/client-node';

const namespace = process.env.NAMESPACE || 'default';

export async function listsecrets(): Promise<any> {
  const kc = new KubeConfig();
  kc.loadFromDefault();
  const k8sApi = kc.makeApiClient(CoreV1Api);
  const res = await k8sApi.listNamespacedSecret(namespace);
  const arr = [];
  res.body.items.forEach(element => {
    arr.push(element.metadata.name);
  });
  return arr;
}

export async function secret(name: string): Promise<any> {
  const kc = new KubeConfig();
  kc.loadFromDefault();
  const k8sApi = kc.makeApiClient(CoreV1Api);
  const res = await k8sApi.readNamespacedSecret(name, namespace);
  const m = {};
  for (const [k, v] of Object.entries(res.body.data)) {
    const buff = Buffer.from(v, 'base64');
    m[k] = buff.toString('ascii');
  }
  return m;
}
