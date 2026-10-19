import Navbar from './components/Navbar';
import Breadcrumb from './components/breadcrumb';
import PageHeader from './components/pageheader';
import StudentCard from "./components/StudentCard";
import student1 from './assets/character1.jpg';
import student2 from './assets/character2.jpg';
import student3 from './assets/character3.jpg';
import student4 from './assets/character4.jpg';
import Pagination from './components/pagination.jsx';
import Footer from './components/footer';
import './App.css'

function App() {
  return (
    <>
        <Navbar />
        <div className="container mt-3">
              <Breadcrumb />
              <PageHeader />
                
              <div className="row g-3 mt-2">
                  <div className="col-12 col-sm-6 col-lg-3">
                      <StudentCard
                          name="Marinette Dupain-Cheng"
                          id={101}
                          major="Literature"
                          year={2}
                          gpa={3.8}
                          image={student1}
                      />
                  </div>
                  <div className="col-12 col-sm-6 col-lg-3">
                      <StudentCard
                          name="Adrien Agreste"
                          id={102}
                          major="Accounts and Finance"
                          year={2}
                          gpa={3.7}
                          image={student2}
                      />
                  </div>
                  <div className="col-12 col-sm-6 col-lg-3">
                      <StudentCard
                          name="Nino Lahiffe"
                          id={103}
                          major="Business Administration"
                          year={2}
                          gpa={3.9}
                          image={student3}
                      />
                  </div>
                  <div className="col-12 col-sm-6 col-lg-3">
                      <StudentCard
                          name="Alya Césaire"
                          id={104}
                          major="Computer Science"
                          year={2}
                          gpa={3.6}
                          image={student4}
                      />
                  </div>
              </div>
              <Pagination />
        </div>
        <Footer />
    </>
  )

  
}

export default App
