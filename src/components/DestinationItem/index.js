import './index.css'

let DestinationItem = props => {
  // console.log(props)
  let {obj} = props

  let {name, id, imgUrl} = obj
  return (
    <li>
      <img className="img" src={imgUrl} alt={name} />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
