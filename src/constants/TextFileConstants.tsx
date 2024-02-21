import { Link } from "react-router-dom"
import { Image, Label, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from "semantic-ui-react"

import { modelContentsDetails } from "./Contents"



const WhatisReact = () => {
    
  return (
    <>
      <p>
        <b>React.js,</b>  commonly referred to as React, is an open-source JavaScript library primarily used for building user interfaces (UIs) for single-page web applications. It was developed by Facebook and released in 2013. React allows developers to create interactive UI components that can efficiently update and render based on changes in application state. <b style={{color:'blue', cursor:'pointer'}}> Dowload </b> React.txt file.
        <br/><br/>
        <h2>DOM</h2>
        The <b>Document Object Model (DOM)</b> is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.  <b style={{color:'blue', cursor:'pointer'}}> Dowload</b> Dom.txt file.
        <br/><br/>
        <h2>Virtual DOM</h2>
        The <b>virtual DOM (VDOM)</b> is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called <b>reconciliation</b>.  <b style={{color:'blue', cursor:'pointer'}}> Dowload</b> VDOM.txt file.
      </p>
    </>
  )
}

const HooksConcepts = () =>{
  
  return (
    <>
    <p>
      <h5>What is Hook ?</h5>
    <b>React Hooks</b> are a feature introduced in React 16.8 that allow you to use state and other React features without writing a class. With Hooks, you can use stateful logic in functional components, which were previously stateless. This makes it easier to reuse logic between components, and it simplifies the process of managing state and side effects.
    <br/><br/>
    <Table celled>
              <TableHeader>
                <TableRow>
                  <TableHeaderCell>Hooks</TableHeaderCell>
                  <TableHeaderCell>description</TableHeaderCell>
                  <TableHeaderCell>Example</TableHeaderCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Label ribbon><p><b>useState</b></p></Label>
                  </TableCell>
                  <TableCell><ul><li>Allows functional components to manage state.
                  <li>It returns a stateful value and a function to update it.</li>
                  </li>  
                  </ul></TableCell>
                  <TableCell>
                    <ul><li><Image size="large" src={modelContentsDetails.react.useStateExample}></Image></li></ul>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Label ribbon><p><b>useEffect</b></p></Label>
                  </TableCell>
                  <TableCell>{ ' '}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Label ribbon><p><b>useRef</b></p></Label>
                  </TableCell>
                  <TableCell>{ ' '}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Label ribbon><p><b>useCallback</b></p></Label>
                  </TableCell>
                  <TableCell>{ ' '}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Label ribbon><p><b>useMemo</b></p></Label>
                  </TableCell>
                  <TableCell>{ ' '}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Label ribbon><p><b>useReducer</b></p></Label>
                  </TableCell>
                  <TableCell>{ ' '}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Label ribbon><p><b>useContext Hook</b></p></Label>
                  </TableCell>
                  <TableCell>{ ' '}</TableCell>
                </TableRow>
             </TableBody>   
    </Table>
    <br/><br/>
    </p>
    </>
  )
}
const InstallationGuide = () => {

  return (
    <>
      <p>
        <ul>
          <li>To set up a basic React application, you can follow these steps:</li><br />
          <li>Need to Installation <b> Node.js and npm </b> ref : <a href="https://nodejs.org/">https://nodejs.org/</a> using this url to dowload latest version
          </li>
          <li> <p>Please <Link to={'/'}> Click </Link> Installation Guide for Node Js</p></li>
          <li> open your <b>terminal using {'(windowskey + R)'}</b> type and run the following commands :
            <ul>
              <li><b>npm install -g react</b><br /></li>
              <li><b>npx create-react-app my-react-app</b><br /></li>
              <li><b>cd my-app</b><br /></li>
              <li><b>npm start</b><br /></li>
            </ul>
          </li>
          <li>following url to Click dowload button you get sample react app .txt file</li>
          <li><h1>Folder Structure</h1>
            <Table celled>
              <TableHeader>
                <TableRow>
                  <TableHeaderCell>root directory</TableHeaderCell>
                  <TableHeaderCell>description</TableHeaderCell>
                </TableRow>
              </TableHeader>

              <TableBody>
                <TableRow>
                  <TableCell>
                    <Label ribbon><p><b>my-react-app</b></p></Label>
                  </TableCell>
                  <TableCell>{ ' '}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Label ribbon>node_modules</Label>
                  </TableCell>
                  <TableCell>{'Installed npm packages'}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Label ribbon>public</Label>
                  </TableCell>
                  {/* <TableCell>{' Public assets'}</TableCell> */}
                  <Table celled>
                    <TableHeader>
                      <TableRow>
                        <TableHeaderCell>root directory</TableHeaderCell>
                        <TableHeaderCell>description</TableHeaderCell>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <Label ribbon>index.html</Label>
                        </TableCell>
                        <TableCell>{'HTML template'}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Label ribbon>assets</Label>
                        </TableCell>
                        <TableCell>{'keep images or icons'}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Label ribbon>src</Label>
                  </TableCell>
                  <Table celled>
                    <TableHeader>
                      <TableRow>
                        <TableHeaderCell>root directory</TableHeaderCell>
                        <TableHeaderCell>description</TableHeaderCell>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <Label ribbon>components</Label>
                        </TableCell>
                        <TableCell>{'React re-useable components'}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Label ribbon>App.js</Label>
                        </TableCell>
                        <TableCell>{'Main source file'}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Label ribbon>index.js</Label>
                        </TableCell>
                        <TableCell>{'Main entry point'}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Label ribbon>App.css</Label>
                        </TableCell>
                        <TableCell>{'Styles for App component'}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Label ribbon>Index.css</Label>
                        </TableCell>
                        <TableCell>{' Global styles'}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Label ribbon>package.json</Label>
                  </TableCell>
                  <TableCell>{'Project dependencies and scripts'}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Label ribbon>package-lock.json</Label>
                  </TableCell>
                  <TableCell>{'Lock file for npm'}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Label ribbon>README.md</Label>
                  </TableCell>
                  <TableCell>{'Project README'}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </li>
        </ul>

        <br />

      </p>
    </>
  )
}
const Basics = () => {
  return (
    <>
      <p>
        <b>JavaScript</b> is a versatile programming language commonly used for web development.
      </p>
    </>
  )
}

const Variables = () => {
  return (
    <>
      <p>
        <ul>
          <li>
            <Table celled>
              <TableHeader>
                <TableRow>
                  <TableHeaderCell>Name</TableHeaderCell>
                  <TableHeaderCell>description</TableHeaderCell>
                  <TableHeaderCell>Example</TableHeaderCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Label ribbon><p><b>Var</b></p></Label>
                  </TableCell>
                  <TableCell><ul>
                    <li>{modelContentsDetails.syntax.Variables.var.a}</li>
                    <li>{modelContentsDetails.syntax.Variables.var.b}</li>
                    <li>{modelContentsDetails.syntax.Variables.var.c}</li>
                  </ul>
                  </TableCell>
                  <TableCell><ul>
                    <li><Image size="medium" src={modelContentsDetails.syntax.Variables.var.example}></Image></li>
                  </ul></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Label ribbon><p><b>Let</b></p></Label>
                  </TableCell>
                  <TableCell><ul>
                    <li>{modelContentsDetails.syntax.Variables.let.a}</li>
                    <li>{modelContentsDetails.syntax.Variables.let.b}</li>
                    <li>{modelContentsDetails.syntax.Variables.let.c}</li>
                  </ul></TableCell>
                  <TableCell><ul>
                    <li><Image size="medium" src={modelContentsDetails.syntax.Variables.let.example}></Image></li>
                  </ul></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Label ribbon><p><b>Const</b></p></Label>
                  </TableCell>
                  <TableCell><ul>
                    <li>{modelContentsDetails.syntax.Variables.const.a}</li>
                    <li>{modelContentsDetails.syntax.Variables.const.b}</li>
                    <li>{modelContentsDetails.syntax.Variables.const.c}</li>
                  </ul></TableCell>
                  <TableCell><ul>
                    <li><Image size="medium" src={modelContentsDetails.syntax.Variables.const.example}></Image></li>
                  </ul></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </li>
        </ul>
      </p>
    </>
  )
}
const DataTypes = () => {
  return (
    <>
      <p>
        <ul>
          <li>
            <Table celled>
              <TableHeader>
                <TableRow>
                  <TableHeaderCell>Name</TableHeaderCell>
                  <TableHeaderCell>description</TableHeaderCell>
                  <TableHeaderCell>Example</TableHeaderCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Label ribbon><p><b>number </b></p></Label>
                  </TableCell>
                  <TableCell><ul>
                    <li>{modelContentsDetails.syntax.DataTypes.number.a}</li>
                    <li>{modelContentsDetails.syntax.DataTypes.number.b}</li>
                    <li>{modelContentsDetails.syntax.DataTypes.number.c}</li>
                  </ul>
                  </TableCell>
                  <TableCell><ul>
                    <li><Image size="medium" src={modelContentsDetails.syntax.DataTypes.number.example}></Image></li>
                  </ul></TableCell>
                </TableRow>
              
              </TableBody>
            </Table>
          </li>
        </ul>
      </p>
    </>
  )
}

const Operators = () => {
  return (
    <>
       <p>
        <ul>
          <li>
            <Table celled>
              <TableHeader>
                <TableRow>
                  <TableHeaderCell>Name</TableHeaderCell>
                  <TableHeaderCell>description</TableHeaderCell>
                  <TableHeaderCell>Example</TableHeaderCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Label ribbon><p><b>Var</b></p></Label>
                  </TableCell>
                  <TableCell><ul>
                    <li>{modelContentsDetails.syntax.Variables.var.a}</li>
                    <li>{modelContentsDetails.syntax.Variables.var.b}</li>
                    <li>{modelContentsDetails.syntax.Variables.var.c}</li>
                  </ul>
                  </TableCell>
                  <TableCell><ul>
                    <li><Image size="medium" src={modelContentsDetails.syntax.Variables.var.example}></Image></li>
                  </ul></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Label ribbon><p><b>Let</b></p></Label>
                  </TableCell>
                  <TableCell><ul>
                    <li>{modelContentsDetails.syntax.Variables.let.a}</li>
                    <li>{modelContentsDetails.syntax.Variables.let.b}</li>
                    <li>{modelContentsDetails.syntax.Variables.let.c}</li>
                  </ul></TableCell>
                  <TableCell><ul>
                    <li><Image size="medium" src={modelContentsDetails.syntax.Variables.let.example}></Image></li>
                  </ul></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Label ribbon><p><b>Const</b></p></Label>
                  </TableCell>
                  <TableCell><ul>
                    <li>{modelContentsDetails.syntax.Variables.const.a}</li>
                    <li>{modelContentsDetails.syntax.Variables.const.b}</li>
                    <li>{modelContentsDetails.syntax.Variables.const.c}</li>
                  </ul></TableCell>
                  <TableCell><ul>
                    <li><Image size="medium" src={modelContentsDetails.syntax.Variables.const.example}></Image></li>
                  </ul></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </li>
        </ul>
      </p>
    </>
  )
}
const Arithmetic = () => {
  return (
    <>
       <p>
        <ul>
          <li>
            <Table celled>
              <TableHeader>
                <TableRow>
                  <TableHeaderCell>Name</TableHeaderCell>
                  <TableHeaderCell>description</TableHeaderCell>
                  <TableHeaderCell>Example</TableHeaderCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Label ribbon><p><b>Var</b></p></Label>
                  </TableCell>
                  <TableCell><ul>
                    <li>{modelContentsDetails.syntax.Variables.var.a}</li>
                    <li>{modelContentsDetails.syntax.Variables.var.b}</li>
                    <li>{modelContentsDetails.syntax.Variables.var.c}</li>
                  </ul>
                  </TableCell>
                  <TableCell><ul>
                    <li><Image size="medium" src={modelContentsDetails.syntax.Variables.var.example}></Image></li>
                  </ul></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Label ribbon><p><b>Let</b></p></Label>
                  </TableCell>
                  <TableCell><ul>
                    <li>{modelContentsDetails.syntax.Variables.let.a}</li>
                    <li>{modelContentsDetails.syntax.Variables.let.b}</li>
                    <li>{modelContentsDetails.syntax.Variables.let.c}</li>
                  </ul></TableCell>
                  <TableCell><ul>
                    <li><Image size="medium" src={modelContentsDetails.syntax.Variables.let.example}></Image></li>
                  </ul></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Label ribbon><p><b>Const</b></p></Label>
                  </TableCell>
                  <TableCell><ul>
                    <li>{modelContentsDetails.syntax.Variables.const.a}</li>
                    <li>{modelContentsDetails.syntax.Variables.const.b}</li>
                    <li>{modelContentsDetails.syntax.Variables.const.c}</li>
                  </ul></TableCell>
                  <TableCell><ul>
                    <li><Image size="medium" src={modelContentsDetails.syntax.Variables.const.example}></Image></li>
                  </ul></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </li>
        </ul>
      </p>
    </>
  )
}
const Assignment = () => {
  return (
    <>
       <p>
        <ul>
          <li>
            <Table celled>
              <TableHeader>
                <TableRow>
                  <TableHeaderCell>Name</TableHeaderCell>
                  <TableHeaderCell>description</TableHeaderCell>
                  <TableHeaderCell>Example</TableHeaderCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Label ribbon><p><b>Var</b></p></Label>
                  </TableCell>
                  <TableCell><ul>
                    <li>{modelContentsDetails.syntax.Variables.var.a}</li>
                    <li>{modelContentsDetails.syntax.Variables.var.b}</li>
                    <li>{modelContentsDetails.syntax.Variables.var.c}</li>
                  </ul>
                  </TableCell>
                  <TableCell><ul>
                    <li><Image size="medium" src={modelContentsDetails.syntax.Variables.var.example}></Image></li>
                  </ul></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Label ribbon><p><b>Let</b></p></Label>
                  </TableCell>
                  <TableCell><ul>
                    <li>{modelContentsDetails.syntax.Variables.let.a}</li>
                    <li>{modelContentsDetails.syntax.Variables.let.b}</li>
                    <li>{modelContentsDetails.syntax.Variables.let.c}</li>
                  </ul></TableCell>
                  <TableCell><ul>
                    <li><Image size="medium" src={modelContentsDetails.syntax.Variables.let.example}></Image></li>
                  </ul></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Label ribbon><p><b>Const</b></p></Label>
                  </TableCell>
                  <TableCell><ul>
                    <li>{modelContentsDetails.syntax.Variables.const.a}</li>
                    <li>{modelContentsDetails.syntax.Variables.const.b}</li>
                    <li>{modelContentsDetails.syntax.Variables.const.c}</li>
                  </ul></TableCell>
                  <TableCell><ul>
                    <li><Image size="medium" src={modelContentsDetails.syntax.Variables.const.example}></Image></li>
                  </ul></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </li>
        </ul>
      </p>
    </>
  )
}
export {
  WhatisReact,
  HooksConcepts,
  InstallationGuide,
  Basics,
  Variables,
  DataTypes,
  Operators,
  Arithmetic,
  Assignment
}
