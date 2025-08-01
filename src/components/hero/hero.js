export const hero = {
  section:
    'container mx-auto pt-44 pb-4 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center',
  left: {
    leftParentDiv: 'w-full md:w-1/2 space-y-4',
    startdiv:
      'flex gap-2 items-center bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 cursor-pointer transition-colors group',
    star: 'group-hover:scale-110 transition-transform',
    text: 'text-sm font-medium',
    h1: 'flex flex-col text-4xl md:text-5xl lg:text-5xl font-bold gap-1 leading-tight',
    blue: 'text-blue-600',
    p: 'text-gray-500 text-lg md:text-xl max-w-lg',
    email_div: {
      main: 'flex gap-3 max-w-md',
      emailInput:
        'flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all',
    },
  },
  right: {
    main: 'w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12',
    img: 'rounded:lg relative z-10 hover:scale-[1.02] transition-transform duration-300',
  },
};
