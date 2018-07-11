// tslint:disable:no-console

export function Safe(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor): PropertyDescriptor {
  const originalMethod = descriptor.value;

  descriptor.value = async function safeWrapper() {
    try {
      const result = await originalMethod.apply(target, arguments);
      return result;
    } catch (err) {
      console.error(err);
    }
  };

  return descriptor;
}

export function SafeAdvanced() {
  return (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor): PropertyDescriptor => {
    const originalMethod = descriptor.value;

    descriptor.value = async function safeWrapper() {
      try {
        const result = await originalMethod.apply(target, arguments);
        return result;
      } catch (err) {
        console.error(err);
      }
    };

    return descriptor;
  };
}
