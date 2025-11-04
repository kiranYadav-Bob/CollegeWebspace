import FacultyCard from '../FacultyCard';

export default function FacultyCardExample() {
  return (
    <div className="p-8">
      <FacultyCard
        name="Dr. Sarah Johnson"
        designation="Professor"
        department="Computer Science"
        qualification="PhD in Computer Science, MIT"
        email="s.johnson@excellence.edu"
      />
    </div>
  );
}
