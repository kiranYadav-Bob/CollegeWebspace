import DepartmentCard from '../DepartmentCard';
import { Computer } from 'lucide-react';

export default function DepartmentCardExample() {
  return (
    <div className="p-8">
      <DepartmentCard
        icon={Computer}
        title="Computer Science"
        description="Explore cutting-edge technology and software development"
        coursesCount={25}
        href="/academics/departments/cs"
      />
    </div>
  );
}
