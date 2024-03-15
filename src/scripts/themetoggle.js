
document.addEventListener('astro:page-load', () => {



	if (localStorage.getItem("theme") === null) {
	    document.documentElement.setAttribute("data-theme", "nord");
	} else {
	    document.documentElement.setAttribute("data-theme", localStorage.getItem("theme"));
	}

    const theme = (() => {
      if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
        return localStorage.getItem("theme");
      }
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
      return "nord";
    })();

    if (theme === "nord") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }

    window.localStorage.setItem("theme", theme);

    const isDarkMode = document.documentElement.classList.contains("dark");
    document.getElementById("themeToggle").checked = isDarkMode;

    function handleToggleClick(e) {
      const element = document.documentElement;
      element.classList.toggle("dark");

      const isDark = element.classList.contains("dark");

	  var themeToggle = "nord";
	  if (isDark){
		themeToggle = "business"
	  }
      localStorage.setItem("theme", themeToggle);
      localStorage.setItem("isDark", isDark);
	  document.documentElement.setAttribute("data-theme", themeToggle);
    };

	document.getElementById("themeToggle").addEventListener("click", function(e){handleToggleClick(e)});
    
  });