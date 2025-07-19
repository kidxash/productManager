function Add () {
    return(
        <>
           {/* Background Image */}
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
            {/* Translucent Overlay */}
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
           
<div style={{
justifyItems: "center",
marginTop: "10%",
backgroundColor: "black",
borderStyle: "solid",
borderWidth: "5px",
borderColor: "lightgrey",
height:"400px",
width: "500px",
marginLeft:"35%",
borderRadius: "20px"


}}>
        <h1 style={{
                    color: "white",
                    marginTop: "50px",
                    fontSize: "25px",
                    fontFamily: "Montserrat, sans-serif",
                }}
>Add Product for Management </h1>
<div style={{

}}>
    <input type="file" placeholder= "Insert product as .txt here" style={{
        marginTop: " 50px",
        width: "100px"
       

    }}></input>
</div>






<div>
    <input type="text" placeholder="Title" style ={{
         marginTop: " 45px",
         width: "300px",
         height: "25px",
         borderRadius: "20px",
         color: "lightgray"
    }}></input>

</div>




<div>
    <input type="submit" style={{
        marginTop:" 65px",
        marginRight: "20px",
        width: "150px",
        borderRadius: "10px"
    }} />
</div>


</div>




        </>
    )

}
export default Add