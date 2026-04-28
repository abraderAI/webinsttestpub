// Entry point for the DEFT-test fixture.
//
// This module is intentionally tiny. Its only role is to give the
// webinstaller a real-but-trivial repo to point at when exercising
// the upgrade-PR pipeline.

export interface Greeting {
  name: string;
  enthusiasm: 1 | 2 | 3;
}

export function greet(g: Greeting): string {
  return `Hello, ${g.name}${'!'.repeat(g.enthusiasm)}`;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(greet({ name: 'world', enthusiasm: 2 }));
}
