function pickFromSyntheticEvent<T extends HTMLElement>() {
  return <K extends keyof T>(key: K) => 
    <E extends ((t: T[K]) => void)>(fn: E) => 
    (event: React.SyntheticEvent<T>) => 
      fn(event.currentTarget[key]);
}
  
export const getValue = pickFromSyntheticEvent<HTMLInputElement>()('value');