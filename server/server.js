import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'

const app = express()
dotenv.config()

app.use(express.json())
app.use(cors())

const port = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.send('hello world');
});

mongoose.connect(process.env.URI)
.then(() => console.log('MongoDb connected'))
.catch((err) => console.log('MongoDb Error:', err));

// schema
const jobSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  experience: {
    type: Number,
  },
  salary: {
    type: Number,
  },
  datePosted: {
    type: String,
  },
  highestEducation: {
    type: String,
  },
  workMode: {
    type: Array,
  },
  workType: {
    type: Array,
  },
  workShift: {
    type: Array,
  },
  department: {
    type: Array,
  },
  englishLevel: {
    type: String,
  },
  gender: {
    type: String,
  },
  location: {
    type: String
  }
});

const AllJobs = mongoose.model('Job', jobSchema);

app.post('/jobs-upload', async(req, res) => {
  // const job = new AllJobs({
  //   title: req.body.title,
  //   experience: req.body.experience,
  //   salary: req.body.salary,
  //   datePosted: req.body.datePosted,
  //   highestEducation: req.body.highestEducation,
  //   workMode: req.body.workMode,
  //   workType: req.body.workType,
  //   workShift: req.body.workShift,
  //   department: req.body.department,
  //   englishLevel: req.body.englishLevel,
  //   gender: req.body.gender,
  // });
  const jobs = req.body;
  await AllJobs.insertMany(jobs)
  res.json({
    success: true,
    name: req.body,
  })
});

app.get('/jobs', async(req, res) => {
  const { sortBy, experience, salary, datePosted, highestEducation, workMode, workType, workShift, department, englishLevel, gender } = req.query;
  const filter = {}

  let sortCriteria;
  switch(sortBy){
    case 'Salary - High to low':
      sortCriteria = { salary: -1 };
      break;
    case 'Date posted - New to Old':
      sortCriteria = { datePosted: -1 };
      break;
    case 'Experience - High to low':
      sortCriteria = { experience: -1 };
      break;
    case 'Relevant':
    default:
      sortCriteria = {};
      break;
  }

  if(experience && experience !== '21'){
    filter.experience = { $lte: Number(experience)}
  }

  if(salary && salary !== '0'){
    filter.salary = { $lte: Number(salary) }
  }

  if(highestEducation){
    const educationLevels = [ '10 or Below 10th', '12th Pass', 'Diploma', 'ITI', 'Graduate', 'Post Graduate' ]
    const index = educationLevels.indexOf(highestEducation)

    if(index !== -1){
      filter.highestEducation = { $in: educationLevels[index] }
    }
  }

  if (datePosted && datePosted !== 'All') {
    const hours = Number(datePosted);
    if ([24, 72, 128].includes(hours)) {
      const currentDate = new Date('2024-07-10');
      const pastDate = new Date(currentDate.getTime() - (hours * 60 * 60 * 1000 ));
      filter.datePosted = { $lte: pastDate.toISOString().split('T')[0] };
    } else {
      return res.status(400).json({ message: 'Invalid datePosted option provided' });
    }
  }

  if(workMode){
    const workModeVlaues = workMode.split(',')
    filter.workMode = { $all: workModeVlaues }
  }

  if(workShift){
    const workShiftVlaues = workShift.split(',')
    filter.workShift = { $all: workShiftVlaues }
  }

  if(workType){
    const workTypeVlaues = workType.split(',')
    filter.workType = { $all: workTypeVlaues }
  }

  if(englishLevel){
    filter.englishLevel = englishLevel
  }

  if(gender){
    filter.gender = gender
  }

  // console.log(filter)
  
  try{
    const jobs = await AllJobs.find(filter).sort(sortCriteria)
    res.send(jobs)
  }catch(err){
    console.log('Error fetching jobs:', err);
    res.status(500).json({ message: 'Server error' });
  }
})

app.listen(port, () => {
    console.log(`server is listening at port ${port}`);
});