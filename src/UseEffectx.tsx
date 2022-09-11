import React from 'react'

const UseEffectx: React.FC = () => {
  const [resource, setResource] = React.useState<string>('posts')
  const [resourceContent, setResourceContent] = React.useState([])

  React.useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${resource}`)
      .then(response => response.json())
      .then(json => setResourceContent(json))
  }, [resource]) //side effect will always run if the state of resource is changed

  return (
    <>
      <div>
        <button onClick={()=>{setResource('posts')}}>Post(s)</button>
        <button onClick={()=>{setResource('users')}}>User(s)</button>
        <button onClick={()=>{setResource('comments')}}>Comment(s)</button>
        <br /><br />
        { resource }
        <br /><br />
        { resourceContent.map(item => {
          return <pre>{JSON.stringify(item)}</pre>
        }) 
        }
      </div>
    </>
  )
}

export default UseEffectx
