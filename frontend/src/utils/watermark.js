/**
 * @project     Home Truth AI
 * @author      Kamlesh Chandela
 * @copyright   © 2026 Kamlesh Chandela. All Rights Reserved.
 * @license     Proprietary — Unauthorized use strictly prohibited.
 * @contact     kamlesh.b.chandela.cg@gmail.com
 *
 * This file is part of Home Truth AI — an original work by Kamlesh Chandela.
 * Copying, modification, redistribution, training AI, or using the 
 * ideas/logic of this work in any project or company is strictly prohibited.
 */



const HOME_TRUTH_AI_SIGNATURE = {
  project: "Home Truth AI",
  author: "Kamlesh Chandela",
  contact: "kamlesh.b.chandela.cg@gmail.com",
  year: 2026,
  buildId: "HTAI-KC-2026-ORIG",
  notice: "© 2026 Kamlesh Chandela. All Rights Reserved. Unauthorized use is prohibited."
};

(function () {
  const s = HOME_TRUTH_AI_SIGNATURE;
  console.log(
    "%c Home Truth AI %c © 2026 Kamlesh Chandela ",
    "background:#0f172a;color:#fff;font-weight:bold;padding:4px 10px;border-radius:4px 0 0 4px;",
    "background:#dc2626;color:#fff;padding:4px 10px;border-radius:0 4px 4px 0;"
  );
  console.log("%cOriginal Work | Build ID: HTAI-KC-2026-ORIG", "color:gray;font-size:11px");
  console.log("%c" + s.notice, "color:gray;font-size:10px");

  if (typeof window !== "undefined") {
    window.__HOME_TRUTH_AI__ = s;
  }
})();

export default HOME_TRUTH_AI_SIGNATURE;

