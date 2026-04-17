
import Card from './components/Card';

function App() {

  const jobOpenings = [
  {
    "brandLogo": "https://e7.pngegg.com/pngimages/344/344/png-clipart-google-logo-google-logo-g-suite-google-text-logo-thumbnail.png",
    "companyName": "Google",
    "datePosted": "3 days ago",
    "post": "Frontend Developer",
    "tag1": "Full Time",
    "tag2": "Junior Level",
    "pay": 45,
    "location": "Bangalore, India"
  },
  {
    "brandLogo": "https://thumbs.dreamstime.com/b/amazon-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-ai-amazon-logo-editorial-illustrative-208329107.jpg",
    "companyName": "Amazon",
    "datePosted": "1 week ago",
    "post": "Software Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": 60,
    "location": "Hyderabad, India"
  },
  {
    "brandLogo": "https://img.freepik.com/premium-vector/meta-company-logo_265339-667.jpg?semt=ais_hybrid&w=740&q=80",
    "companyName": "Meta",
    "datePosted": "5 days ago",
    "post": "React Developer",
    "tag1": "Part Time",
    "tag2": "Junior Level",
    "pay": 50,
    "location": "Mumbai, India"
  },
  {
    "brandLogo": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    "companyName": "Apple",
    "datePosted": "2 weeks ago",
    "post": "iOS Developer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": 70,
    "location": "Delhi, India"
  },
  {
    "brandLogo": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/500px-Netflix_icon.svg.png?_=20220806170125",
    "companyName": "Netflix",
    "datePosted": "4 days ago",
    "post": "UI Engineer",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": 65,
    "location": "Remote"
  },
  {
    "brandLogo": "https://static.vecteezy.com/system/resources/previews/027/127/473/non_2x/microsoft-logo-microsoft-icon-transparent-free-png.png",
    "companyName": "Microsoft",
    "datePosted": "10 days ago",
    "post": "Backend Developer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": 68,
    "location": "Hyderabad, India"
  },
  {
    "brandLogo": "https://pngdownload.io/wp-content/uploads/2023/12/Adobe-Logo-PNG-Design-Brand-Transparent-jpg.webp",
    "companyName": "Adobe",
    "datePosted": "6 days ago",
    "post": "Full Stack Developer",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": 55,
    "location": "Noida, India"
  },
  {
    "brandLogo": "https://logo.clearbit.com/tesla.com",
    "companyName": "Tesla",
    "datePosted": "8 days ago",
    "post": "Software Developer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": 75,
    "location": "Remote"
  },
  {
    "brandLogo": "https://logo.clearbit.com/uber.com",
    "companyName": "Uber",
    "datePosted": "2 days ago",
    "post": "Android Developer",
    "tag1": "Part Time",
    "tag2": "Junior Level",
    "pay": 48,
    "location": "Bangalore, India"
  },
  {
    "brandLogo": "https://pngdownload.io/wp-content/uploads/2024/02/Airbnb-Logo-global-hospitality-travel-vacation-rental-online-booking-transparent-PNG-image-jpg.webp",
    "companyName": "Airbnb",
    "datePosted": "12 days ago",
    "post": "Frontend Engineer",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": 62,
    "location": "Remote"
  }
]

  return (
    <div className="parent">
      {jobOpenings.map(function(elem){
        return <Card company={elem.companyName} post={elem.post} date={elem.datePosted}
        logo={elem.brandLogo} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location}/>
      })}
      
    </div>
  )
}

export default App
