<div className="header">
<h1>Auth workshop</h1>
{isAuth ? (
  <button
    onClick={() => {
      dispatch(logout());
      navigate("/");
    }}
  >
    Logout
  </button>
) : null}
</div>