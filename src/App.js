import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// cái local kia dòng trên là cho máy tính mình vào. còn dòng dưới là cho mấy thiết bị khác nhưng cùng mạng wifi truy cập . ví dụ điện thoại vô link đó cũng được
// ctrl + chuot trai là nó mở lên luôn
// trang đầu tiên đang như v
//Cái này là cách làm việc này
//git branch để xem mà mình đang ở branch nào
// khi mà viết 1 chức năng mới thì phải chuyển qua branch khác
//Câu lệnh viết để vừa tạo vừa chuyển là git checkout -b #tên branch#
// câu lệnh chuyển vô mấy branch đã được tạo  là git checkout thôi
// là chuyển qua chuyển lại giữa 2 cái đó
//khi mình thay điổi code trong 1 file thì cái icon thứ 3 ở thanh navbar nó hiện 1 kìa thấy chưa. nghĩa là 1 file mình đang thay đổi
//khi mà thấy thay đổi xong r không còn lỗi nữa thì đẩy lên cho t
// gồm có mấy cú pháp này: git status | git add . | git commit -m "mô tả" | git push origin tên nhánh(branch)
// ví dụ muốn push hết tất cả cái text này lên thì như này
// chuyển qua branch mới
// rồi git status để xem có thay đổi gì
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Team view test
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => toast.success('click')}>Click</button>
      </header>
      <ToastContainer />
    </div>
  );
}

export default App;
