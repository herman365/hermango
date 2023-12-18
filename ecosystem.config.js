module.exports = {
  apps : [{
    name   : "duipin-official",
    exec_mode: "cluster",
    instances: 1,
    script : "node_modules/next/dist/bin/next",
    args: 'start -p 8888',
  }]
}