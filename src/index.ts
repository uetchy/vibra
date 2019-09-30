interface Runnable {
  name: string;
  options: {};
  stack?: Runnable[];
  then?: (runnable: Runnable) => Runnable;
  run: (prevRunnable?: Runnable) => Promise<any>;
}

type Options = {};

export function createRunnable(name: string, options?: Options): Runnable {
  const runnable = {
    name: name,
    options: options,
    stack: [],
    then: function(runnable: Runnable) {
      this.stack.push(runnable);
      return this;
    },
    run: async function() {
      for (const runnable of this.stack) {
        await runnable.run();
      }
    },
  };
  return runnable;
}

export function Rect(args: Options) {
  const rect = createRunnable('Rect').then({
    name: 'Rect',
    options: args,
    run: async () => {
      console.log('create rect svg', name);
    },
  });
  return rect;
}

export function animate(params: any, duration: number, easings?: string | {}) {
  return {
    name: 'animate',
    options: params,
    run: (prevRunnable: Runnable) => {
      return new Promise((resolve, reject) => {
        console.debug(`Rect[${prevRunnable.name}]: start (${duration}sec)`);
        setTimeout(() => {
          resolve(
            console.debug(`Rect[${prevRunnable.name}]: end (${duration}sec)`),
          );
        }, duration * 1000);
      });
    },
  };
}

export function Group(stack: Runnable[]) {
  return {
    run: () => Promise.all(stack.map((runnable) => runnable.run())),
  };
}

export async function render(stack: Runnable, container: any) {
  for (const runnable of stack.stack) {
    await runnable.run();
  }
}
