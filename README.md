*se crea el BACKEND*
-se instalo "npm i json-server"
-se instalo "npm i axios"
-se instalo "npm i react-router-dom"

- hice todos los Hooks con la lógica a utilizar
- se importan los datos necesarios de cada Hooks en el useContext (proveedor)

***
-empiezo a crear las Rutas y el "MainLayoutRoutes"
-se crea el Navbar
-Empiezo a crear las vistas de las paginas

***
-crear los componentes a utilizar (ej: Card)(Clase 15 15:00)
-hacer el array.map() de products
-crear funcion para ocultar icono de favorito (Clase 15 30:00)
	La funcion debe buscar en el array si el ID existe usando .some y da un boolean
	Esta funcion va dentro del Hook favorito y se va pasando desde el proveedor de useContext

-Se hace el onClick para AGREGAR objetos al array de "favoritos" (Clase 15 45:00)
	Se debe usar una peticion POST con una funcion async; va en Hook favorito
	Esa función se pasa por params al onClick en el boton de agregar a favorito.

-Se hace el onClick para REMOVER objetos del array de "favoritos" (Clase 15 56:00)
	Se debe usar una peticion DELETE con una funcion async que tome el valor del id a borrar; va en Hook favorito

***
-Se hace la Pages Favoritos donde se debe mostrar todos los añadidos en favoritos: (CLASE 15 1:02:00)
	En esta page se hace un .map en el array "favorites" que traigo de useContext (provider)

-Tengo que cambiar los iconos del corazón al tachito para los objetes que se muestran en page "Favoritos".
	-Pasando una props booleana en "Favorites.jsx", se debe hacer un ternario en "Card.jsx" dependiendo si es true o false, mostrar el ico que corresponde.

*** 
- hay que hacer un formulario para luego cargar nuevos productos (CLASE 15 1:20:00)
	Hacerlo dinámico utilizando shared. 
	Poner la lógica en un custom Hook: debe guardar el valor de los input con un handleChange. La logica del boton "submit" no se pone
acá por si el form se llega a reutilizar para otra cosa.

- Poner el <Formulario/> en la pages a mostar.

- Se crea la carpeta "helper" dentro de SRC(CLASE 15 1:48:00)
	Acá creo una funcion (agregar EXPORT) para poner un Switch donde dependiendo el string, ponga un tipo de dato en el Input.
	Esta funcion se agrega al <Input/> como "type=" dentro del archivo Formulario.jsx

- se crea la función de agregar producto dentro del Hook useProduct
	debe tomar un objeto y hacer un axiosClient.POST a la dirección de productos y se le agrega el nuevo objeto
	Esta se importa dentro del Formulario.jsx