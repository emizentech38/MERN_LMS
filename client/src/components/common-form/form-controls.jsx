function FormControls({ formControls = [], formData, setFormData }) {

    function renderComponentByType(){

    }

  return (
    <div className="flex flex-col gap-3">
        {
            formControls.map((controlItem) => (
                <div key={controlItem.name}>

                </div>
            ) )
        }
    </div>
  )
}

export default FormControls;
