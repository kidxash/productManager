import useAPI from "../API/API"
import { useState } from "react";

function Add () {
     const { createProduct } = useAPI();
    
    const [title, setTitle] = useState('');
    const [fileContent, setFileContent] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        
        if (file && file.type === 'text/plain') {
            const reader = new FileReader();
            reader.onload = (e) => {
                setFileContent(e.target.result);
            };
            reader.onerror = (e) => {
                console.error('Error reading file:', e);
                alert('Error reading file. Please try again.');
            };
            reader.readAsText(file);
        } else if (file) {
            alert('Please select a .txt file');
            setSelectedFile(null);
            setFileContent('');
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (!title.trim()) {
            alert('Please enter a title');
            return;
        }
        
        if (!fileContent.trim()) {
            alert('Please select a valid .txt file');
            return;
        }

        setIsLoading(true);
        
        try {
            const productDatas = {
                Title: title.trim(),
                productData: fileContent,
            };
            
            await createProduct(productDatas);
            
            setTitle('');
            setFileContent('');
            setSelectedFile(null);
            document.querySelector('input[type="file"]').value = '';
            
            alert('Product added successfully!');
        } catch (error) {
            console.error('Error creating product:', error);
            alert('Error creating product. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return(
        <>
           
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    backgroundImage: "url('/pexels-umkreisel-app-956999.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    zIndex: -2
                }}
            />
           
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    background: "rgba(0,0,0,0.5)", // semi-transparent black
                    zIndex: -1
                }}
            />
             <form onSubmit={handleSubmit}>
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      position: "relative",
      zIndex: 1,
    }}
  >
    <div
      style={{
        backgroundColor: "black",
        borderStyle: "solid",
        borderWidth: "5px",
        borderColor: "lightgrey",
        height: "400px",
        width: "500px",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          color: "white",
          marginBottom: "30px",
          fontSize: "25px",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        Add Product for Management
      </h1>
      <div>
        <input
          type="file"
          placeholder="Insert product as .txt here"
          accept=".txt"
          onChange={handleFileChange}
          style={{
            marginBottom: "30px",
            width: "100px",
          }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            marginBottom: "30px",
            width: "300px",
            height: "25px",
            borderRadius: "20px",
            color: "lightgray",
          }}
        />
      </div>
      <div>
        <input
          type="submit"
          style={{
            width: "150px",
            borderRadius: "10px",
          }}
        />
      </div>
    </div>
  </div>
</form>
        </>
    );

}
export default Add;