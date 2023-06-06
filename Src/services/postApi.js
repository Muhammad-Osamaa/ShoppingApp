import axios from 'axios';
// const loginApi = () => {
//   let promise = new Promise((resolve, reject) => {
//     let formData = new FormData();
//     formData.append('email', 'israrmemon60@gmail.com');
//     formData.append('password', 'israr');

//     let config = {
//       method: 'post',
//       url: 'http://192.168.86.203/safco-mis/employees/ReactData/usamatest.php',
//       data: formData,
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     };

//     axios
//       .request(config)
//       .then(response => {
//         console.log(JSON.stringify(response.data.StatusCode));
//         resolve(JSON.stringify(response.data));
//       })
//       .catch(error => {
//         reject(error);
//         // console.log(error);
//       });
//   });

//   return promise;
// };

export const loginApi = async () => {
  // let formData = new FormData();
  // const email = formData.append('email', 'israrmemon60@gmail.com');
  // const password =  formData.append('password', 'israr');
  try {
    const response = await axios.post(
      'http://192.168.86.203/safco-mis/employees/ReactData/usamatest.php',
      {
        email: 'israrmemon60@gmail.com',
        password: 'israr',
      },
    );
    console.log('response==>', response.data);
  } catch (error) {
    console.error(error); // Handle the error
  }
};
