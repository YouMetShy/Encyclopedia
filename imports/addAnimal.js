import * as bootstrap from 'bootstrap'

Template.addAnimal.events({
    'click .js-addModal'() {
        const addModal = new bootstrap.Modal('#addModal', {})
        document.querySelector("#addModal").addEventListener('hidden.bs.modal', event => {

            console.log("closing")
        })

        addModal.show()
    },
    'click .js-saveAnimal'() {
        const addModal = bootstrap.Modal.getInstance('#addModal')
        let image = document.querySelector("#image").value
        let Aname = document.querySelector("#Aname").value
        let Sname = document.querySelector("#Sname").value
        let Description = document.querySelector("#Description").value
        Animaldb.insert({
            "Animal": Aname,
            "Species": Sname,
            "Description": Description,
            "profile": image
        })
        addModal.hide()
    },
    'input #image'() {
        const image = document.querySelector('#image')
        const imgProfile = document.querySelector('#profImg')
        imgProfile.src = image.value
        console.debug(image.value)
    }
})