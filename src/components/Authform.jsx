const AuthForm = ({ type }) => {
  const formTitle = {
    signup: 'Create an Account',
    login: 'Welcome Back',
    forgotPassword: 'Reset Password',
    resetSuccess: 'Check Your Email',
  };

  const buttonText = {
    signup: 'Sign Up',
    login: 'Login',
    forgotPassword: 'Send Reset Link',
    resetSuccess: 'Back to Login',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-n-8">
      <div className="w-full max-w-md p-8 bg-n-7 rounded-lg shadow-md">
        <div className="text-center mb-8">
          <img src="/path-to-your-logo.png" alt="Midvector Logo" className="mx-auto w-16 h-16 mb-4" />
          <h1 className="h1 text-n-1">Midvector</h1>
        </div>
        <h2 className="h2 text-center mb-6">{formTitle[type]}</h2>
        <form onSubmit={handleSubmit}>
          {type !== 'resetSuccess' && (
            <>
              <div className="mb-4">
                <label htmlFor="email" className="block text-n-3 mb-2">Email Address</label>
                <input id="email" type="email" required className="w-full px-3 py-2 bg-n-6 border border-n-5 rounded-md focus:outline-none focus:ring-2 focus:ring-color-1" />
              </div>
              {(type === 'signup' || type === 'login') && (
                <div className="mb-4">
                  <label htmlFor="password" className="block text-n-3 mb-2">Password</label>
                  <input id="password" type="password" required className="w-full px-3 py-2 bg-n-6 border border-n-5 rounded-md focus:outline-none focus:ring-2 focus:ring-color-1" />
                </div>
              )}
              {type === 'signup' && (
                <div className="mb-4">
                  <label htmlFor="confirm-password" className="block text-n-3 mb-2">Confirm Password</label>
                  <input id="confirm-password" type="password" required className="w-full px-3 py-2 bg-n-6 border border-n-5 rounded-md focus:outline-none focus:ring-2 focus:ring-color-1" />
                </div>
              )}
            </>
          )}
          {type === 'resetSuccess' && (
            <p className="text-n-3 text-center mb-6">We&apos;ve sent you an email with a link to reset your password. Please check your inbox and follow the instructions.</p>
          )}
          <button type="submit" className="w-full py-2 mt-4 bg-gradient-to-r from-purple-500 via-cyan-500 to-indigo-500 text-n-1 font-bold rounded-md hover:from-purple-600 hover:via-cyan-600 hover:to-indigo-600 transition-all">
            {buttonText[type]}
          </button>
        </form>
        {(type === 'signup' || type === 'login') && (
          <p className="text-n-3 text-center mt-4">
            {type === 'signup' ? 'Already have an account? ' : 'Forgot your password? '}
            <a href={type === 'signup' ? "/login" : "/forgot-password"} className="text-color-1 underline">
              {type === 'signup' ? 'Login' : 'Reset it'}
            </a>
          </p>
        )}
        {type === 'resetSuccess' && (
          <p className="text-n-3 text-center mt-4">
            <a href="/login" className="text-color-1 underline">Back to Login</a>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
