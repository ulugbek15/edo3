import {useMutation, gql} from '@apollo/client'

const UPLOAD_FILE = gql`
    mutation uploadFile($file: Upload!) {
        uploadFile(file: $file) {
            filename
            mimetype
            encoding
            path
            savedFileName
        }
    }
`

const FileUpload = () =>{

	const [uploadVar, { loading, error } ] = useMutation(UPLOAD_FILE, {
        onCompleted: data => console.log(data)
    })

    if(loading) return <h1>Loading</h1>
    if(error) return <h1>Error</h1>

    	const handleChange = e =>{
    		const file = e.target.files[0]

    		console.log(file)

    		uploadVar({
    			variables:{
    				file,
    			}
    		})
    	}
    	const handleForm = e =>{
    		e.preventDefault()
    	}

	return(
		<>
			<h1>File Upload</h1>

			<form onSubmit={handleForm} encType="multipart/formData">
				<input onChange={handleChange} type="file"/>
  				<input type="submit"/>
			</form>

		</>
		)
	}

export default FileUpload;