
module.exports = {
  params: {
    designator: 'S',
    from: undefined,
    to: undefined
  },
  body: p => {
    const text = `
      (footprint "Diode_SMD:D_SOD-323" (layer "F.Cu")
        ${p.at  /* parametric position */ }

        (descr "SOD-323")
        (tags "SOD-323")
        (attr smd)
        (fp_line
          (start -1.61 -0.85)
          (end -1.61 0.85)
          (stroke
            (width 0.12)
            (type solid)
          )
          (layer "F.SilkS")
        )
        (fp_line
          (start -1.61 -0.85)
          (end 1.05 -0.85)
          (stroke
            (width 0.12)
            (type solid)
          )
          (layer "F.SilkS")
        )
        (fp_line
          (start -1.61 0.85)
          (end 1.05 0.85)
          (stroke
            (width 0.12)
            (type solid)
          )
          (layer "F.SilkS")
        )
        (fp_line
          (start -1.6 -0.95)
          (end -1.6 0.95)
          (stroke
            (width 0.05)
            (type solid)
          )
          (layer "F.CrtYd")
        )
        (fp_line
          (start -1.6 -0.95)
          (end 1.6 -0.95)
          (stroke
            (width 0.05)
            (type solid)
          )
          (layer "F.CrtYd")
        )
        (fp_line
          (start -1.6 0.95)
          (end 1.6 0.95)
          (stroke
            (width 0.05)
            (type solid)
          )
          (layer "F.CrtYd")
        )
        (fp_line
          (start 1.6 -0.95)
          (end 1.6 0.95)
          (stroke
            (width 0.05)
            (type solid)
          )
          (layer "F.CrtYd")
        )
        (fp_line
          (start -0.9 -0.7)
          (end 0.9 -0.7)
          (stroke
            (width 0.1)
            (type solid)
          )
          (layer "F.Fab")
        )
        (fp_line
          (start -0.9 0.7)
          (end -0.9 -0.7)
          (stroke
            (width 0.1)
            (type solid)
          )
          (layer "F.Fab")
        )
        (fp_line
          (start -0.3 -0.35)
          (end -0.3 0.35)
          (stroke
            (width 0.1)
            (type solid)
          )
          (layer "F.Fab")
        )
        (fp_line
          (start -0.3 0)
          (end -0.5 0)
          (stroke
            (width 0.1)
            (type solid)
          )
          (layer "F.Fab")
        )
        (fp_line
          (start -0.3 0)
          (end 0.2 -0.35)
          (stroke
            (width 0.1)
            (type solid)
          )
          (layer "F.Fab")
        )
        (fp_line
          (start 0.2 -0.35)
          (end 0.2 0.35)
          (stroke
            (width 0.1)
            (type solid)
          )
          (layer "F.Fab")
        )
        (fp_line
          (start 0.2 0)
          (end 0.45 0)
          (stroke
            (width 0.1)
            (type solid)
          )
          (layer "F.Fab")
        )
        (fp_line
          (start 0.2 0.35)
          (end -0.3 0)
          (stroke
            (width 0.1)
            (type solid)
          )
          (layer "F.Fab")
        )
        (fp_line
          (start 0.9 -0.7)
          (end 0.9 0.7)
          (stroke
            (width 0.1)
            (type solid)
          )
          (layer "F.Fab")
        )
        (fp_line
          (start 0.9 0.7)
          (end -0.9 0.7)
          (stroke
            (width 0.1)
            (type solid)
          )
          (layer "F.Fab")
        )
        (pad "1" smd roundrect
          (at -1.05 0 ${p.r})
          (size 0.6 0.45)
          (layers "F.Cu" "F.Mask" "F.Paste")
          (roundrect_rratio 0.25)
          ${p.to.str}
        )
        (pad "2" smd roundrect
          (at 1.05 0 ${p.r})
          (size 0.6 0.45)
          (layers "F.Cu" "F.Mask" "F.Paste")
          (roundrect_rratio 0.25)
          ${p.from.str}
        )
    )
    `;

    return text;
  }
}
