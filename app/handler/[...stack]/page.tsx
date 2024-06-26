import { StackHandler } from "@stackframe/stack";
import { stackServerApp } from "../../../stack";
export const runtime = 'edge'
export default function Handler(props: any) {
  return <StackHandler fullPage app={stackServerApp} {...props} />;
}
