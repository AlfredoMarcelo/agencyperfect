const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      apiURL: "http://localhost:5000",
      email: "",
      password: "",
      error: null,
      isAuth: false,
      currentUser: null,
      profile: null
    },
    actions: {
      isAuthenthicated: () => {
        if (sessionStorage.getItem("isAuth")) {
          setStore({
            isAuth: JSON.parse(sessionStorage.getItem("isAuth")),
            currentUser: JSON.parse(sessionStorage.getItem("currentUser")),
          });
        }
      },
      handleChange: (e) => {
        setStore({
          [e.target.name]: e.target.value,
        });
      },
      handleSubmit: async (e, history) => {
        e.preventDefault();
        try {
          const { apiURL, email, password } = getStore();
          const data = { email, password };
          console.log(data);
          const resp = await fetch(`${apiURL}/api/login`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const infoUser = await resp.json();
          if (infoUser.msg) {
            setStore({
              password: "",
              error: infoUser.msg,
            });
          } else {
            setStore({
              email: "",
              password: "",
              error: null,
              currentUser: infoUser,
              isAuth: true,
            });
            
            sessionStorage.setItem("isAuth", true);
            sessionStorage.setItem("currentUser", JSON.stringify(infoUser));
            history.push("/");
            console.log(infoUser)
          }
        } catch (error) {
          setStore({
            error: error.message,
          });
        }
      },
      getProfile: () => {
        const {apiURL, currentUser} = getStore();
    
        fetch(`${apiURL}/api/profile`, {
          method:'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer' + currentUser?.access_token
          }
        })
        .then(resp => resp.json())
        .then(data => {
          console.log(data)
          setStore({
            profile:data
          })
        })
        .catch(error => console.log(error));
      }
    },
  };
};
export default getState;
