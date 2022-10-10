import Filho from "./Filho"

export default function Pai() {

  const callbackPai = (msg) => {
    alert("Oi meu filho " + msg)
  }

  return (
    <div>
      <Filho callbackPai={callbackPai}/>
    </div>
  )
}