export default function Color() {

    function handleChange(event) {
        console.log(event.target.value);
        event.target.value;
      }

  return (
    <input type="color" id="color" onChange={handleChange} />
   
  )
}
