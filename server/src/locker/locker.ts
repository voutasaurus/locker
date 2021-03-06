import { KubeConfig, CoreV1Api } from '@kubernetes/client-node';

export function listContexts(): any {
  const kc = new KubeConfig();
  kc.loadFromDefault();
  const arr = [];
  kc.contexts.forEach(element => {
    arr.push(element.name);
  });
  return arr;
}

export async function listNamespaces(context: string): Promise<any> {
  const kc = new KubeConfig();
  kc.loadFromDefault();
  if (context != null && context !== '') {
    kc.currentContext = context;
  }
  const k8sApi = kc.makeApiClient(CoreV1Api);
  const res = await k8sApi.listNamespace();
  const arr = [];
  res.body.items.forEach(element => {
    arr.push(element.metadata.name);
  });
  return arr;
}

export async function listSecrets(context: string, namespace: string): Promise<any> {
  const kc = new KubeConfig();
  kc.loadFromDefault();
  if (context != null && context !== '') {
    kc.currentContext = context;
  }
  const k8sApi = kc.makeApiClient(CoreV1Api);
  if (namespace === '') {
    namespace = 'default';
  }
  const res = await k8sApi.listNamespacedSecret(namespace);
  const arr = [];
  res.body.items.forEach(element => {
    arr.push(element.metadata.name);
  });
  return arr;
}

export async function secret(context: string, namespace: string, name: string): Promise<any> {
  const kc = new KubeConfig();
  kc.loadFromDefault();
  if (context != null && context !== '') {
    kc.currentContext = context;
  }
  const k8sApi = kc.makeApiClient(CoreV1Api);
  if (namespace === '') {
    namespace = 'default';
  }
  const res = await k8sApi.readNamespacedSecret(name, namespace);
  const m = {};
  for (const [k, v] of Object.entries(res.body.data)) {
    const buff = Buffer.from(v, 'base64');
    m[k] = buff.toString('ascii');
  }
  return m;
}
