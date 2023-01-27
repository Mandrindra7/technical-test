import { ServerResponse } from 'http';
import { PassThrough } from 'stream';
import fs from 'fs'

export default function passthrough(filepath: string, res: ServerResponse): ServerResponse {
  // @todo:
  // 1. implement this function, use `PassThrough` stream to pipe the file content to the response explain what `PassThrough` stream is and why it is used here, could you tell another way to do this?
  // 2. add headers:
  //   - Cache-Control: max-age=3600, public
  //   - X-Metadata: technical-test
  // to see result, check `http://localhost:3000/api/storages/working.json`


  //Passthrough is a class part of stream module in nodeJs
  //It pass data through without modifying it
  //another way to do it is using pipe() or through2 a package :https://www.npmjs.com/package/through2
  const passthrough = new PassThrough()
  let result;

  passthrough.write(filepath)

  passthrough.on('data', (chunk) => {

    let rawdata =  fs.readFileSync(`${chunk.toString()}`);
    result = JSON.parse(rawdata.toString())
  
  })

  passthrough.end()

  res.setHeader('Cache-Control','max-age=3600, public')
  res.setHeader('X-Metadata','technical-test')

  return res.end(`${JSON.stringify(result)}`);
}
