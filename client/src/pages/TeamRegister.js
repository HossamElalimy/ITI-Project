import { useRef, useState } from "react";
import "./teamregister.css";

export default function TeamRegister() {
  const fileInputRef = useRef(null);
  const [teamName, setTeamName] = useState("");
  const [teamPassword, setTeamPassword] = useState("");
  const [teamType, setTeamType] = useState("Duo");
  const [logoFile, setLogoFile] = useState(null);
  const [logoPreviewUrl, setLogoPreviewUrl] = useState("");

  function onPickFileClick() { fileInputRef.current?.click(); }
  function onFileChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setLogoFile(file);
    setLogoPreviewUrl(URL.createObjectURL(file));
  }
  function onDrop(e) {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (!file) return;
    setLogoFile(file);
    setLogoPreviewUrl(URL.createObjectURL(file));
  }
  function onDragOver(e) { e.preventDefault(); }
  function onSubmit(e) {
    e.preventDefault();
    const payload = { teamName, teamPassword, teamType, hasLogo: !!logoFile };
    console.log("Create team payload:", payload);
    alert("Team created (mock). Check console for payload.");
  }

  return (
    <main className="team-register-main">
      <section className="team-register-section">
        <div className="tr-header">
          <h1>Your Teams</h1>
          <p className="tr-sub">Register your Team!</p>
        </div>

        <form className="team-form" onSubmit={onSubmit}>
          <label htmlFor="teamName">Team Name</label>
          <input id="teamName" type="text" required
                 value={teamName} onChange={(e) => setTeamName(e.target.value)}
                 placeholder="e.g., Frost Wolves" />

          <label htmlFor="teamPassword">Team Password</label>
          <input id="teamPassword" type="password" required
                 value={teamPassword} onChange={(e) => setTeamPassword(e.target.value)}
                 placeholder="Enter a strong password" />

          <div className="team-type" role="radiogroup" aria-label="Team Type">
            <span className="team-type__label">Team Type</span>
            <div className="team-type-options">
              <input id="type-duo" name="teamType" type="radio" value="Duo"
                     checked={teamType === "Duo"} onChange={() => setTeamType("Duo")} />
              <label htmlFor="type-duo">Duo Team</label>

              <input id="type-squad" name="teamType" type="radio" value="Squad"
                     checked={teamType === "Squad"} onChange={() => setTeamType("Squad")} />
              <label htmlFor="type-squad">Squad Team</label>
            </div>
          </div>

          <div className="logo-drop" onClick={onPickFileClick}
               onDrop={onDrop} onDragOver={onDragOver}
               role="button" tabIndex={0} aria-label="Upload team logo"
               onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onPickFileClick()}>
            <input ref={fileInputRef} type="file" accept="image/*" onChange={onFileChange} hidden />
            {!logoPreviewUrl ? (
              <div className="logo-drop__placeholder">
                <span className="logo-drop__title">Team Logo</span>
                <span className="logo-drop__hint">Click or drop an image here</span>
              </div>
            ) : (
              <div className="logo-preview">
                <img src={logoPreviewUrl} alt="Team logo preview" />
              </div>
            )}
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-primary">Create Team</button>
          </div>
        </form>
      </section>
    </main>
  );
}
