const express = require("express");
const util = require("util");
const exec = util.promisify(require("child_process").exec);

const app = express();
const port = 8000;

const execute = async cmnd => {
  const { stdout, stderr } = await exec(cmnd);
  if (stderr) {
    return stderr;
  }

  return stdout.split("\n");
};

app.get("/", async (_, res) => {
  // let's put whatever which may be interesting to peek in the pod
  try {
    let ip = await execute("hostname -i");
    let env = await execute("env");
    // const hostname = await exec("hostname -I");
    // console.log(hostname);

    // if (hostname.stdout)
    // const env = await exec("env");
    // console.log(env);

    res.send({ ip, env });
  } catch (e) {
    res.send(e);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
