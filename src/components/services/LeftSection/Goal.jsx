const Goal = ({ goal }) => {
  return (
    <>
      <li className="flex items-center mb-2">
        <span
          className={`h-5 w-5 bg-indigo-200 rounded-full mt-1 mr-3 flex items-center justify-center`}
        >
          <span className={`h-2.5 w-2.5 rounded-full bg-blue-600`}></span>
        </span>
        {goal}
      </li>
    </>
  );
};

export default Goal;
