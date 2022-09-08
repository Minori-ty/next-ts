export function redirect(ctx: any, target: string) {
  if (ctx.res) {
    ctx.res.writeHead(303, { Location: target })
  } else {
  }
}
