import { SiteData } from "../models/siteData";

export const Layout = (props: SiteData) => {
  return (
    <html lang="en" data-bs-theme="light">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/static/css/styles.css"></link>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
          media="print"
          onload="this.media='all'"
        ></link>
        <title>{props.meta.title} - IDM</title>
        {props.meta.description && (
          <>
            <meta name="description" content={props.meta.description} />
          </>
        )}
        {props.meta.canonical && (
          <>
            <link
              rel="canonical"
              href={"https://idm.in" + props.meta.canonical}
            />
          </>
        )}
        <link
          href="https://cdn.jsdelivr.net/npm/flag-icons@6.6.6/css/flag-icons.min.css"
          rel="stylesheet"
          media="print"
          onload="this.media='all'"
        />
      </head>
      <body>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark border-bottom-1 shadow-lg fixed-top">
          <div class="container">
            <a class="navbar-brand" href="/">
              <img
                src="/static/img/logo.png"
                alt="Logo"
                width="200"
                height="58"
                class="d-inline-block align-top"
              />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                  >
                    Log in
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="https://github.com/dayschedule/idm" target="_blank" rel="nofollow">
                    <i class="bi bi-github fs-4"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <main>{props.children}</main>
        <footer class="border-top py-5 text-center">
          <div class="container">
            <p>
              &copy; 2023 idm.in
              <br />
              All Rights Reserved.
            </p>
          </div>
        </footer>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/handlebars/dist/handlebars.min.js"></script>
        <script src="/static/js/main.js"></script>
      </body>
    </html>
  );
};
