import ComponentB from './ComponentB'
import './ComponentStyles.css'

const ComponentA = () => {
  const cendol = 2

  return (
    <div>
      <ComponentB cendol={cendol} />
    </div>
  )
}

export default ComponentA
