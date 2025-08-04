const logoPattern = 'w-4 h-4 rounded-full transition-opacity';
export const header = {
  header:
    'fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm',
  navbar:
    'w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16',
  logo: 'flex items-center gap-1 cursor-pointer',
  logoDesign: {
    blue: logoPattern + ' bg-blue-600 opacity-70 hover:opacity-100',
    red: logoPattern + ' bg-red-500 -ml-2 opacity-100 hover:opacity-70',
  },

  link: `text-sm font-medium relative px-3 py-2 after:absolute`,
  linkDiv: 'hidden md:flex items-center gap-10',
  activeLink: `after:bottom-0 after:left-0
  after:h-0.5 after:w-0 after:w-full
  after:bg-blue-600 after:transition-all duration-300
  bg-red-400 text-white rounded`,
  button:
    'md:block bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-all duration-300 cursor-pointer text-sm font-medium shadow-lg hover:shadow-blue-300',
  mobileMenuDiv: 'md:hidden bg-white border-t border-gray-100 py-4 px-2',
  mobileMenuConatiner: 'container flex flex-col mx-auto space-y-2',
};
