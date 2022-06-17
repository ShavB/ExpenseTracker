// import React from "react";
// import ExpenseItems from "./components/ExpenseItems";

// // "https://randomuser.me/api/?results=20"  

// export default function App() {
  
//   return (
//     <div className="App">

//       <h1>Hello world</h1>
//       <ExpenseItems/>
//     </div>
//   );
// }

// import * as React from 'react';
// import { Upload } from '@progress/kendo-react-upload';

// export default function App(){
//   return <Upload batch={false} restrictions={{
//     allowedExtensions: ['.jpg', '.png']
//   }} defaultFiles={[]} withCredentials={false} saveUrl={'https://demos.telerik.com/kendo-ui/service-v4/upload/save'} removeUrl={'https://demos.telerik.com/kendo-ui/service-v4/upload/remove'} />;
// };

import React, {useState} from 'react';
import axios from 'axios';

function App() {

  const [file, setFile] = useState()

  function handleChange(event) {
    setFile(event.target.files[0])
  }
  
  function handleSubmit(event) {
    event.preventDefault()
    const url = 'http://localhost:3000/uploadFile';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });

  }

  return (
    <div className="App">
        <form onSubmit={handleSubmit}>
          <h1>React File Upload</h1>
          <input 
            type="file"
            onChange={handleChange}
            accept = ".pptx, .pdf"
          />
          <button type="submit">Upload</button>
        </form>
    </div>
  );
}

export default App;

